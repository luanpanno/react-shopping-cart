import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import CartItem from '@components/CartItem';
import Loading from '@components/Loading';
import NoContentText from '@components/NoContentText';
import Content from '@containers/Content';

import { useProduct } from '@contexts/ProductContext';

import { Container } from './styles';

const Cart = () => {
  const { search } = useLocation();
  const { loadingProducts, listProducts, cartProducts } = useProduct();
  const query = useMemo(() => new URLSearchParams(search).get('q'), [search]);

  useEffect(() => {
    listProducts();
  }, [listProducts, query]);

  return (
    <Container>
      <Content
        title="Carrinho"
        headerComplements={
          <span>{cartProducts?.length} produtos adicionados</span>
        }
      >
        {loadingProducts && cartProducts?.length <= 0 && <Loading />}

        {!loadingProducts && cartProducts?.length <= 0 && (
          <NoContentText>Carrinho vazio.</NoContentText>
        )}

        {cartProducts?.map((product) => {
          return <CartItem cartItem={product} />;
        })}
      </Content>
    </Container>
  );
};

export default Cart;
