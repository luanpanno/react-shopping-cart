import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  gap: var(--gap-large);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--colors-primary);
  padding: var(--gap-large) 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colors-white);
  min-height: 300px;
  min-width: 50vw;
  max-width: 300px;
  padding: var(--gap-large);
  border-radius: var(--radius-regular);
  position: relative;

  img {
    height: 90px;
    position: absolute;
    top: -128px;
  }

  h1 {
    font-size: var(--font-big);
    color: var(--colors-red);
    font-weight: bold;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-medium);
    width: 100%;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: var(--gap-verySmall) var(--gap-medium);
  border-radius: var(--radius-regular);
  width: 100%;

  p {
    color: #555;
    font-size: var(--font-regular);
    line-height: var(--font-big);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: var(--gap-extra);
  color: #fff;
  background-color: var(--colors-secondary);
  border: none;
  border-radius: var(--radius-small);
  transition: all 300ms;
  text-transform: uppercase;

  &:hover {
    opacity: 0.9;
  }
`;
