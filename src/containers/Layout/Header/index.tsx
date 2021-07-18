import { RiHeartLine, RiShoppingCart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import LivenLogo from '@assets/imgs/logo-liven.webp';
import Searchbar from '@components/Searchbar';

import { useStore } from '@contexts/StoreContext';

import {
  Container,
  Content,
  CartLink,
  LikedProductsButton,
  AmountSpan,
} from './styles';

const Header = () => {
  const { cartProductsAmount, likedProducts } = useStore();

  function handleAmountNumber(amount: number) {
    return amount >= 100 ? '+99' : amount;
  }

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={LivenLogo} alt="logo" />
        </Link>

        <Searchbar />

        <LikedProductsButton>
          {likedProducts?.length > 0 && (
            <AmountSpan>{handleAmountNumber(likedProducts?.length)}</AmountSpan>
          )}
          <RiHeartLine />
        </LikedProductsButton>

        <CartLink to="/carrinho">
          {cartProductsAmount > 0 && (
            <AmountSpan>{handleAmountNumber(cartProductsAmount)}</AmountSpan>
          )}
          <RiShoppingCart2Line />
        </CartLink>
      </Content>
    </Container>
  );
};

export default Header;
