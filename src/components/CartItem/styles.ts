import styled from 'styled-components';

interface QuantityFieldProps {
  hasError?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 24px 8px;
  gap: 16px;

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100px;
    overflow: hidden;
    border-radius: 2px;

    img {
      width: 100%;
    }
  }
`;

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;

  .text {
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
  row-gap: 4px;
  position: relative;

  & > button {
    position: absolute;
    bottom: -20px;
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.red};
  }
`;

export const QuantityField = styled.div<QuantityFieldProps>`
  display: flex;
  align-items: center;
  column-gap: 8px;
  border: 1px solid
    ${(props) => (props.hasError ? props.theme.colors.red : `#eaeaea`)};
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

  button {
    font-weight: bold;

    &:disabled {
      color: #eaeaea;
      cursor: default;
    }
  }
`;

export const Price = styled.span`
  text-align: right;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;
