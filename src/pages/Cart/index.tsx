import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import CartItem from '@components/CartItem';
import Loading from '@components/Loading';
import NoContentText from '@components/NoContentText';
import Content from '@containers/Content';

import { useStore } from '@contexts/StoreContext';

import { Container, CartContainer, Total, FinishContainer } from './styles';

const Cart = () => {
  const { search } = useLocation();
  const { loadingProducts, listProducts, cartProducts } = useStore();
  const query = useMemo(() => new URLSearchParams(search).get('q'), [search]);
  const cartTotal = useMemo(
    () =>
      cartProducts
        ?.map((item) => item.total)
        ?.reduce((cur, acc) => {
          let amount = acc;
          amount += cur;

          return amount;
        }),
    [cartProducts]
  );

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

        <CartContainer>
          {cartProducts?.map((product) => {
            return <CartItem cartItem={product} />;
          })}
        </CartContainer>

        <Total>
          Total de{' '}
          <span>
            R$ {(cartProducts?.length > 0 ? cartTotal : 0).toFixed(2)}
          </span>
        </Total>

        <FinishContainer>
          <button type="button">Finalizar compra</button>
        </FinishContainer>
      </Content>
    </Container>
  );
};

export default Cart;
