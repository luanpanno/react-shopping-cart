import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--gap-medium) 0;
  background-color: var(--colors-primary);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--gap-large);
  width: 100%;
  max-width: 1000px;
  padding: 0 var(--gap-extra);

  & > a img {
    height: 50px;
  }

  .logo {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'logo notifications'
      'searchbar searchbar';
    gap: var(--gap-regular);

    .logo {
      grid-area: logo;
    }

    .searchbar {
      grid-area: searchbar;
    }

    .notifications {
      grid-area: notifications;
    }
  }

  @media screen and (max-width: 620px) {
    padding: 0 var(--gap-medium);
  }
`;

export const Notifications = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: var(--gap-medium);

  .liked {
    position: relative;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--gap-large);
      width: var(--gap-large);

      & > button {
        height: 100%;
        width: 100%;
        padding: 0;
      }
    }
  }
`;

export const ButtonStyles = css`
  color: var(--colors-primary);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms;
  position: relative;

  svg {
    color: var(--colors-white);
    font-size: var(--font-extra);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const CartLink = styled(Link)`
  ${ButtonStyles};
  height: var(--gap-large);
  width: var(--gap-large);
`;

export const LikedProductsButton = styled.button`
  ${ButtonStyles};
`;
