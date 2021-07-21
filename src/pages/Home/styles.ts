import styled from 'styled-components';

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  gap: var(--gap-large);

  @media screen and (max-width: 815px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 496px) {
    grid-template-columns: 1fr;
  }
`;
