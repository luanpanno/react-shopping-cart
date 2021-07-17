import { useMemo } from 'react';

import confirmHandler from '@components/ConfirmAlert';

import { useStore } from '@contexts/StoreContext';
import { CartProduct } from '@models/domain/Product';

import { Container, ProductInfo, Quantity, Price } from './styles';

interface Props {
  cartItem: CartProduct;
}

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { products, handleCartProducts } = useStore();
  const product = useMemo(
    () => products?.find((item) => item.id === cartItem.id),
    [cartItem, products]
  );

  function handleDeleteProduct() {
    confirmHandler('Tem certeza que deseja remover este produto?', () => {
      handleCartProducts(product);
    });
  }

  return (
    <Container>
      <ProductInfo>
        <div className="img-container">
          <img src={product?.image} alt={product?.name} />
        </div>
        <div>
          <span className="name">{product?.name}</span>
          <span className="stock">{product?.stock} restantes</span>
        </div>
      </ProductInfo>
      <Quantity>
        <div className="field">
          <button type="button">-</button>
          <input type="text" value={cartItem.quantity} onChange={() => {}} />
          <button type="button">+</button>
        </div>
        <button type="button" onClick={handleDeleteProduct}>
          Excluir
        </button>
      </Quantity>
      <Price>R$ {product?.price}</Price>
    </Container>
  );
};

export default CartItem;
