import { useCallback, useMemo } from 'react';

import confirmHandler from '@components/ConfirmAlert';
import Image from '@components/Image';
import Tooltip from '@components/Tooltip';

import { useStore } from '@contexts/StoreContext';
import { CartProduct } from '@models/domain/Product';
import { generateTooltipId } from '@utils/generateTooltipId';
import { masks } from '@utils/masks';

import {
  Container,
  ProductInfo,
  Quantity,
  QuantityField,
  Price,
} from './styles';

interface Props {
  cartItem: CartProduct;
}

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const {
    products,
    handleCartProducts,
    handleCartProductQuantity,
    handleCartProductInputQuantityChange,
    cartProducts,
  } = useStore();
  const product = useMemo(
    () => products?.find((item) => item.id === cartItem.id),
    [cartItem, products]
  );

  const getTooltipId = useCallback(
    (name: string) => {
      return generateTooltipId(cartItem?.id, name);
    },
    [cartItem]
  );

  const tooltipId = useMemo(
    () => ({
      decrease: getTooltipId('decrease'),
      increase: getTooltipId('increase'),
    }),
    [getTooltipId]
  );

  function handleDeleteProduct() {
    confirmHandler('Tem certeza que deseja remover este produto?', () => {
      handleCartProducts(product);
    });
  }

  function handleQuantityChange(sum: number) {
    handleCartProductQuantity(product.id, cartItem.quantity + sum);
  }

  return (
    <Container data-cy="cart-product">
      <Image
        src={product?.image}
        alt={product?.name}
        className="img-container"
      />
      <ProductInfo>
        <div className="text">
          <span className="name">{product?.name}</span>
          <span className="stock">{product?.stock} restantes</span>
        </div>
        <Quantity>
          <QuantityField
            hasError={
              cartProducts?.find((item) => item.quantity === 0)?.id ===
              cartItem?.id
            }
            data-cy="quantity-field"
          >
            <button
              type="button"
              onClick={() => handleQuantityChange(-1)}
              disabled={cartItem.quantity <= 0}
              data-for={tooltipId.decrease}
              data-tip="Diminuir quantidade"
              data-cy="decrease-button"
            >
              -
            </button>
            <Tooltip id={tooltipId.decrease} />
            <input
              type="text"
              value={cartItem.quantity || ''}
              onChange={(e) =>
                handleCartProductInputQuantityChange(e, product?.id)
              }
              data-cy="quantity-input"
            />
            <button
              type="button"
              onClick={() => handleQuantityChange(1)}
              disabled={cartItem.quantity >= product?.stock}
              data-for={tooltipId.increase}
              data-tip="Aumentar quantidade"
              data-cy="increase-button"
            >
              +
            </button>
            <Tooltip id={tooltipId.increase} />
          </QuantityField>
          <button
            type="button"
            onClick={handleDeleteProduct}
            data-cy="delete-product-button"
          >
            Excluir
          </button>
        </Quantity>
        <Price>R$ {masks.decimal(cartItem.total.toFixed(2))}</Price>
      </ProductInfo>
    </Container>
  );
};

export default CartItem;
