import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
  /* border: 1px solid #eaeaea; */
  /* border-radius: 6px; */
  padding: 24px 8px;
`;

export const ProductInfo = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  flex: 2;

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100px;
    overflow: hidden;
    border-radius: 2px;
    /* border-top-left-radius: 6px;
    border-bottom-left-radius: 6px; */

    img {
      width: 100%;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }

  .stock {
    color: #aaa;
    font-size: 0.9rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 12px;
  row-gap: 4px;

  .field {
    display: flex;
    align-items: center;
    column-gap: 8px;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    padding: 0 8px;

    input {
      padding: 8px 0;
      text-align: center;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      max-width: 50px;
    }
  }

  & > button {
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.red};
  }
`;

export const Price = styled.span`
  align-self: flex-start;
  margin-top: 18px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;
