import { toast } from 'react-toastify';

import CartItem from '@components/CartItem';
import Loading from '@components/Loading';
import NoContentText from '@components/NoContentText';
import Content from '@containers/Content';

import { useStore } from '@contexts/StoreContext';
import { masks } from '@utils/masks';

import { CartContainer, Total, CheckoutContainer } from './styles';

const Cart = () => {
  const {
    loadingProducts,
    cartProducts,
    cartProductsAmount,
    cartTotalPrice,
    hasProductWithNoQuantity,
    products,
  } = useStore();

  function handleCheckoutClick() {
    toast.info('Ainda não implementado! Quem sabe depois?');
  }

  if (loadingProducts && (cartProducts?.length <= 0 || products?.length <= 0)) {
    return <Loading />;
  }

  return (
    <Content
      title="Carrinho"
      countText={`${cartProductsAmount} produto(s) adicionados`}
    >
      {!loadingProducts &&
        (cartProducts?.length <= 0 || products?.length <= 0) && (
          <NoContentText>Carrinho vazio.</NoContentText>
        )}

      {cartProducts?.length > 0 && products?.length > 0 && (
        <>
          <CartContainer>
            {cartProducts?.map((product) => {
              return <CartItem key={product.id} cartItem={product} />;
            })}
          </CartContainer>

          <Total data-cy="total-price">
            Total de <span>R$ {masks.decimal(cartTotalPrice.toFixed(2))}</span>
          </Total>

          <CheckoutContainer>
            <button
              type="button"
              onClick={handleCheckoutClick}
              disabled={hasProductWithNoQuantity}
              data-cy="checkout-button"
            >
              Finalizar compra
            </button>
          </CheckoutContainer>
        </>
      )}
    </Content>
  );
};

export default Cart;
