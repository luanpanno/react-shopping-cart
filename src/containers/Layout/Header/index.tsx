import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import LivenLogo from '../../../assets/imgs/logo-liven.webp';
import Searchbar from './Searchbar';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <img src={LivenLogo} alt="logo" />

      <Searchbar />

      <Link to="/carrinho">
        <RiShoppingCart2Line />
      </Link>
    </Container>
  );
};

export default Header;
