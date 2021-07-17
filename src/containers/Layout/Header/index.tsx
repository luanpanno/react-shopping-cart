import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import LivenLogo from '@assets/imgs/logo-liven.webp';
import Searchbar from '@components/Searchbar';

import { Container, Content, CartLink } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={LivenLogo} alt="logo" />
        </Link>

        <Searchbar />

        <CartLink to="/carrinho">
          <RiShoppingCart2Line />
        </CartLink>
      </Content>
    </Container>
  );
};

export default Header;
