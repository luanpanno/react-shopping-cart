import styled from 'styled-components';

export const Container = styled.div`
  margin: var(--gap-big) 0;
  width: 100%;
  max-width: 1000px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--gap-regular);
  font-size: var(--font-regular);
  padding: 0 var(--gap-regular);

  h1 {
    font-size: var(--font-big);
    padding: var(--gap-regular);
    padding-top: 0;
    border-bottom: 3px solid var(--colors-secondary);
  }

  span {
    font-size: var(--font-small);
  }
`;

export const Main = styled.main`
  padding: var(--gap-extra);
  background-color: var(--colors-white);
  border-radius: var(--radius-regular);
`;
