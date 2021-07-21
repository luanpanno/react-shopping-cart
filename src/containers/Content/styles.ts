import styled from 'styled-components';

export const Container = styled.div`
  margin: var(--gap-big) 0;
  width: 100%;
  max-width: 1000px;
  padding: 0 var(--gap-extra);

  @media screen and (max-width: 620px) {
    margin: var(--gap-medium) 0;
    padding: 0 var(--gap-small);
  }
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
    text-align: right;
    font-size: var(--font-small);
  }
`;

export const Main = styled.main`
  padding: var(--gap-extra);
  background-color: var(--colors-white);
  border-radius: var(--radius-regular);

  @media screen and (max-width: 850px) {
    padding: var(--gap-big);
  }
`;
