import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--colors-white);
  height: var(--gap-large);
  border-radius: var(--radius-big);
  width: 100%;
  max-width: 600px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;

  input {
    flex: 1;
    height: 100%;
    padding: var(--gap-regular) var(--gap-small);
    border-right: var(--gap-regular);
    border: none;
    outline: none;
    background-color: transparent;
    min-width: 300px;
    width: 100%;
  }

  button {
    position: absolute;
    right: 0;

    svg {
      color: var(--colors-grey1);
    }
  }
`;

export const SearchButton = styled.button`
  width: var(--gap-large);
  height: 100%;
  transition: background 200ms;
  border-top-right-radius: var(--gap-regular);
  border-bottom-right-radius: var(--gap-regular);
  margin-left: var(--gap-verySmall);
  border-left: 1px solid var(--colors-grey4);

  svg {
    font-size: var(--font-big);
    color: var(--colors-grey3);
  }

  &:hover {
    background-color: var(--colors-grey4);
  }
`;
