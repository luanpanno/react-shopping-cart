import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* row-gap: 16px; */

  & > div {
    border-bottom: 1px solid #eaeaea;
  }
`;

export const Total = styled.div`
  padding: 48px 8px;
  text-align: right;
  border-bottom: 1px solid #eaeaea;

  span {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 36px;
  margin-right: 4px;

  button {
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    padding: 12px 16px;
    border-radius: 2px;
    transition: all 200ms;

    &:hover {
      opacity: 0.9;
    }
  }
`;
