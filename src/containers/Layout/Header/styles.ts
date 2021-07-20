import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75px;
  background-color: var(--colors-primary);
  position: sticky;
  top: 0;
  z-index: 10;

  .liked {
    position: relative;
  }
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--gap-big);
  width: 100%;
  max-width: 1000px;
  padding: 0 var(--gap-extra);

  & > a img {
    height: 50px;
  }
`;

export const Notifications = styled.div`
  display: flex;
  column-gap: var(--gap-large);
`;

export const ButtonStyles = css`
  color: var(--colors-primary);
  border-radius: 100%;
  height: var(--gap-large);
  width: var(--gap-large);
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
`;

export const LikedProductsButton = styled.button`
  ${ButtonStyles};
`;
