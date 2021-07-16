import { RiShoppingCart2Line } from 'react-icons/ri';

import LivenLogo from '@assets/imgs/logo-liven.webp';
import Searchbar from '@components/Searchbar';

import { Container, CartLink } from './styles';

const Header = () => {
  return (
    <Container>
      <img src={LivenLogo} alt="logo" />

      <Searchbar />

      <CartLink to="/carrinho">
        <RiShoppingCart2Line />
      </CartLink>
    </Container>
  );
};

export default Header;
