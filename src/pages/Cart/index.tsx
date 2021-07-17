import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import CartItem from '@components/CartItem';
import Loading from '@components/Loading';
import NoContentText from '@components/NoContentText';
import Content from '@containers/Content';

import { useStore } from '@contexts/StoreContext';
import { masks } from '@utils/masks';

import { Container, CartContainer, Total, CheckoutContainer } from './styles';

const Cart = () => {
  const { search } = useLocation();
  const { loadingProducts, listProducts, cartProducts } = useStore();
  const query = useMemo(() => new URLSearchParams(search).get('q'), [search]);
  const cartTotal = useMemo(
    () =>
      cartProducts?.length > 0
        ? cartProducts
            ?.map((item) => item.total)
            ?.reduce((cur, acc) => {
              let amount = acc;
              amount += cur;

              return amount;
            })
        : 0,
    [cartProducts]
  );
  const productsAmount = useMemo(
    () =>
      cartProducts?.length > 0
        ? cartProducts
            ?.map((item) => item.quantity)
            ?.reduce((cur, acc) => {
              let amount = acc;
              amount += cur;

              return amount;
            })
        : 0,
    [cartProducts]
  );

  useEffect(() => {
    listProducts();
  }, [listProducts, query]);

  function handleCheckoutClick() {
    toast.info('Ainda não implementado! Quem sabe depois?');
  }

  return (
    <Container>
      <Content
        title="Carrinho"
        headerComplements={<span>{productsAmount} produto(s) adicionados</span>}
      >
        {loadingProducts && cartProducts?.length <= 0 && <Loading />}

        {!loadingProducts && cartProducts?.length <= 0 && (
          <NoContentText>Carrinho vazio.</NoContentText>
        )}

        {cartProducts?.length > 0 && (
          <>
            <CartContainer>
              {cartProducts?.map((product) => {
                return <CartItem key={product.id} cartItem={product} />;
              })}
            </CartContainer>

            <Total>
              Total de <span>R$ {masks.decimal(cartTotal.toFixed(2))}</span>
            </Total>

            <CheckoutContainer>
              <button type="button" onClick={handleCheckoutClick}>
                Finalizar compra
              </button>
            </CheckoutContainer>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Cart;
