import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px 0;
  width: 100%;
  max-width: 1000px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;
  font-size: 0.9rem;
  padding: 0 12px;

  h1 {
    font-size: 1.4rem;
    padding: 0 12px 12px 12px;
    border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const Main = styled.main`
  padding: 64px;
  background-color: #fff;
  border-radius: 5px;
`;
