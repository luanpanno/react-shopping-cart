import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme.colors.primary};
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
  width: 100%;
  max-width: 1000px;

  & > a img {
    height: 50px;
  }
`;

export const ButtonStyles = css`
  font-size: 1.4rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${(props) => props.theme.colors.primary};
  border-radius: 100%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const CartLink = styled(Link)`
  ${ButtonStyles};
`;

export const LikedProductsButton = styled.button`
  ${ButtonStyles};
`;
