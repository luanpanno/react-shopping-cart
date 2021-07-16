import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 75px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 25%;

  & > img {
    height: 50px;
  }
`;
