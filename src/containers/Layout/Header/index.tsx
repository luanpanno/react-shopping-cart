import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import LivenLogo from '@assets/imgs/logo-liven.webp';
import Searchbar from '@components/Searchbar';

import { useProduct } from '@contexts/ProductContext';

import { Container, Content, CartLink } from './styles';

const Header = () => {
  const { cartProducts } = useProduct();

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={LivenLogo} alt="logo" />
        </Link>

        <Searchbar />

        <CartLink to="/carrinho">
          {cartProducts?.length > 0 && <span>{cartProducts.length}</span>}
          <RiShoppingCart2Line />
        </CartLink>
      </Content>
    </Container>
  );
};

export default Header;
