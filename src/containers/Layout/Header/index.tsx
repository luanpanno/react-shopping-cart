import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';

import LivenLogo from '@assets/imgs/logo-liven.webp';
import Icons from '@components/Icons';
import LikedProductsList from '@components/LikedProductsList';
import NotificationLabel from '@components/NotificationLabel';
import Searchbar from '@components/Searchbar';
import Tooltip from '@components/Tooltip';

import { useStore } from '@contexts/StoreContext';

import {
  Container,
  Content,
  Notifications,
  CartLink,
  LikedProductsButton,
} from './styles';

const Header = () => {
  const { cartProductsAmount, likedProducts, products } = useStore();
  const [openList, setOpenList] = useState(false);

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={LivenLogo} alt="logo" />
        </Link>

        <Searchbar />

        <Notifications>
          <OutsideClickHandler onOutsideClick={() => setOpenList(false)}>
            <div className="liked">
              <LikedProductsButton
                onClick={() => setOpenList((state) => !state)}
                data-for="liked-button"
                data-cy="liked-button"
                data-tip="Lista de Favoritos"
              >
                {likedProducts?.length > 0 && products?.length > 0 && (
                  <NotificationLabel
                    dataCy="liked-products-label"
                    value={likedProducts?.length}
                  />
                )}
                <Icons.HeartFill />
              </LikedProductsButton>
              <Tooltip id="liked-button" />
              {openList && <LikedProductsList />}
            </div>
          </OutsideClickHandler>

          <CartLink
            to="/carrinho"
            data-cy="cart-button"
            data-for="cart-button"
            data-tip="Carrinho"
          >
            {cartProductsAmount > 0 && products?.length > 0 && (
              <NotificationLabel
                dataCy="cart-products-label"
                value={cartProductsAmount}
              />
            )}
            <Icons.CartFill />
          </CartLink>
          <Tooltip id="cart-button" />
        </Notifications>
      </Content>
    </Container>
  );
};

export default Header;
