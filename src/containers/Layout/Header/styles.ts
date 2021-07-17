import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme.colors.primary};
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

export const CartLink = styled(Link)`
  font-size: 1.4rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
