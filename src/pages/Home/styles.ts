import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  margin: 32px 0;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 12px;
    font-size: 0.9rem;
    padding: 0 12px;

    & > div {
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
    }
  }

  h1 {
    font-size: 1.4rem;
    padding: 0 12px 12px 12px;
    border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1000px;
  padding: 64px;
  background-color: #fff;
  border-radius: 5px;
`;
