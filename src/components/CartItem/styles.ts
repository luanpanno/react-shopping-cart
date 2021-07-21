import styled from 'styled-components';

interface QuantityFieldProps {
  hasError?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: var(--gap-big) var(--gap-small);
  gap: var(--gap-medium);

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100px;
    overflow: hidden;
    border-radius: var(--radius-small);

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 560px) {
    align-items: center;
    justify-content: center;

    .img-container {
      align-self: flex-start;
    }
  }

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;

    .img-container {
      align-self: center;
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
    row-gap: var(--gap-verySmall);
  }

  .stock {
    color: var(--colors-grey1);
    font-size: var(--font-small);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: var(--gap-regular);
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: var(--gap-big);
    align-items: center;
    justify-items: center;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: var(--gap-verySmall);
  position: relative;

  & > button {
    position: absolute;
    bottom: -20px;
    font-size: var(--font-small);
    color: var(--colors-red);
  }
`;

export const QuantityField = styled.div<QuantityFieldProps>`
  display: flex;
  align-items: center;
  column-gap: var(--gap-small);
  border: 1px solid
    ${(props) => (props.hasError ? 'var(--colors-red)' : `var(--colors-grey4)`)};
  border-radius: var(--radius-regular);
  padding: 0 var(--gap-small);

  input {
    padding: var(--gap-small) 0;
    text-align: center;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    max-width: var(--gap-extra);
  }

  button {
    font-weight: bold;

    &:disabled {
      color: var(--colors-grey4);
      cursor: default;
    }
  }
`;

export const Price = styled.span`
  text-align: right;
  color: var(--colors-primary);
  font-weight: bold;

  @media screen and (max-width: 450px) {
    margin-top: var(--gap-regular);
  }
`;
