import styled from 'styled-components';

// react-confirm-alert throw an error if using styled themes, so i put the colors directly

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background-color: white;
  box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
  }
`;

export const Main = styled.main`
  padding: 16px;

  p {
    margin: 0 12px 24px 12px;
    padding-bottom: 32px;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
  }

  .buttons {
    margin-right: 24px;
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    column-gap: 8px;
    width: 100%;

    button {
      padding: 6px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: all 200ms;
    }
  }
`;

export const Button = styled.button`
  background-color: #78d98a;
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonOutline = styled.button`
  color: #e63946;
  border: 1px solid #e63946;
  background-color: #fff;

  &:hover {
    background-color: #e63946;
    color: #fff;
  }
`;
