import { useMemo } from 'react';

import confirmHandler from '@components/ConfirmAlert';

import { useStore } from '@contexts/StoreContext';
import { CartProduct } from '@models/domain/Product';
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
    hasProductWithNoQuantity,
  } = useStore();
  const product = useMemo(
    () => products?.find((item) => item.id === cartItem.id),
    [cartItem, products]
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
    <Container>
      <div className="img-container">
        <img src={product?.image} alt={product?.name} />
      </div>
      <ProductInfo>
        <div className="text">
          <span className="name">{product?.name}</span>
          <span className="stock">{product?.stock} restantes</span>
        </div>
        <Quantity>
          <QuantityField hasError={hasProductWithNoQuantity}>
            <button
              type="button"
              onClick={() => handleQuantityChange(-1)}
              disabled={cartItem.quantity <= 0}
            >
              -
            </button>
            <input
              type="text"
              value={cartItem.quantity || ''}
              onChange={(e) =>
                handleCartProductInputQuantityChange(e, product?.id)
              }
            />
            <button
              type="button"
              onClick={() => handleQuantityChange(1)}
              disabled={cartItem.quantity >= product.stock}
            >
              +
            </button>
          </QuantityField>
          <button type="button" onClick={handleDeleteProduct}>
            Excluir
          </button>
        </Quantity>
        <Price>R$ {masks.decimal(cartItem.total.toFixed(2))}</Price>
      </ProductInfo>
    </Container>
  );
};

export default CartItem;
