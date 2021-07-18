import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 40px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  min-height: 300px;
  min-width: 50vw;
  max-width: 300px;
  padding: 40px;
  border-radius: 5px;
  position: relative;

  img {
    height: 90px;
    position: absolute;
    top: -128px;
  }

  h1 {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.red};
    font-weight: bold;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    width: 100%;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 24px 16px;
  border-radius: 5px;
  width: 100%;

  p {
    color: #555;
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 2px;
  transition: all 300ms;
  text-transform: uppercase;

  &:hover {
    opacity: 0.9;
  }
`;
