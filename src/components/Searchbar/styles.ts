import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 32px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;

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
    padding: 12px 8px;
    border-right: 12px;
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
      color: #333;
    }
  }
`;

export const SearchButton = styled.button`
  width: 36px;
  height: 100%;
  transition: background 200ms;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-left: 4px;
  border-left: 1px solid #ccc;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #eaeaea;
  }
`;
