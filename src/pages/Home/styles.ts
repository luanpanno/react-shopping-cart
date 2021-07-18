import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  span {
    border-right: 1px solid #ccc;
    padding-right: 12px;
    margin-right: 4px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.1rem;
    }

    &.active {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  gap: 32px;
`;
