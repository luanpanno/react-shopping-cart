import styled from 'styled-components';

// react-confirm-alert throw an error if using styled themes, so i put the colors directly

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background-color: var(--colors-white);
  box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-small);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--gap-regular) var(--gap-small);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-regular);
  }
`;

export const Main = styled.main`
  padding: var(--gap-medium);

  p {
    margin: 0 var(--gap-regular) var(--gap-big) var(--gap-regular);
    padding-bottom: var(--gap-large);
    border-bottom: 1px solid var(--colors-grey4);
    font-size: var(--font-regular);
  }

  .buttons {
    margin-right: var(--gap-big);
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    column-gap: var(--gap-small);
    width: 100%;

    button {
      padding: var(--gap-small) var(--gap-regular);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-regular);
      transition: all 200ms;
    }
  }
`;

export const Button = styled.button`
  background-color: var(--colors-secondary);
  color: var(--colors-white);

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonOutline = styled.button`
  color: var(--colors-red);
  border: 1px solid var(--colors-red);
  background-color: var(--colors-white);

  &:hover {
    background-color: var(--colors-red);
    color: var(--colors-white);
  }
`;
