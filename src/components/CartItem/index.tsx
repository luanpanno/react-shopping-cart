import { useMemo } from 'react';

import { useProduct } from '@contexts/ProductContext';
import { CartProduct } from '@models/domain/Product';

import { Container } from './styles';

interface Props {
  cartItem: CartProduct;
}

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { products } = useProduct();
  const product = useMemo(
    () => products?.find((item) => item.id === cartItem.id),
    [cartItem, products]
  );

  return <Container>{product?.name}</Container>;
};

export default CartItem;
