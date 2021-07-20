import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    border-bottom: 1px solid var(--colors-grey4);
  }
`;

export const Total = styled.div`
  padding: var(--gap-extra) var(--gap-small);
  text-align: right;
  border-bottom: 1px solid var(--colors-grey4);

  span {
    color: var(--colors-primary);
    font-weight: bold;
    font-size: var(--font-big);
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: var(--gap-large);
  margin-right: var(--gap-verySmall);

  button {
    background-color: var(--colors-secondary);
    color: var(--colors-white);
    padding: var(--gap-regular) var(--gap-medium);
    border-radius: var(--radius-small);
    transition: all 200ms;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      background-color: var(--colors-grey3);
      cursor: not-allowed;
    }
  }
`;
