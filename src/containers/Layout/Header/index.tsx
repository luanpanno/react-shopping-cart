import { useState } from 'react';
import { RiHeartLine, RiShoppingCart2Line } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';

import LivenLogo from '@assets/imgs/logo-liven.webp';
import LikedProductsList from '@components/LikedProductsList';
import Searchbar from '@components/Searchbar';
import Tooltip from '@components/Tooltip';

import { useStore } from '@contexts/StoreContext';

import {
  Container,
  Content,
  CartLink,
  LikedProductsButton,
  AmountSpan,
} from './styles';

const Header = () => {
  const { cartProductsAmount, likedProducts, products } = useStore();
  const [openList, setOpenList] = useState(false);

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

        <OutsideClickHandler onOutsideClick={() => setOpenList(false)}>
          <div className="liked">
            <LikedProductsButton
              onClick={() => setOpenList((state) => !state)}
              data-for="liked-button"
              data-tip="Lista de Favoritos"
            >
              {likedProducts?.length > 0 && products?.length > 0 && (
                <AmountSpan>
                  {handleAmountNumber(likedProducts?.length)}
                </AmountSpan>
              )}
              <RiHeartLine />
            </LikedProductsButton>
            <Tooltip id="liked-button" />
            {openList && <LikedProductsList />}
          </div>
        </OutsideClickHandler>

        <CartLink to="/carrinho" data-for="cart-button" data-tip="Carrinho">
          {cartProductsAmount > 0 && products?.length > 0 && (
            <AmountSpan>{handleAmountNumber(cartProductsAmount)}</AmountSpan>
          )}
          <RiShoppingCart2Line />
        </CartLink>
        <Tooltip id="cart-button" />
      </Content>
    </Container>
  );
};

export default Header;
