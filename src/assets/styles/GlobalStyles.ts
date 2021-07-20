import { createGlobalStyle } from 'styled-components';

import { Reset } from './Reset';

import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

  :root {
    ${(props) =>
      Object.keys(props.theme.colors).map(
        (color) => `--colors-${color}: ${props.theme.colors[color]};`
      )};

    --font-small: 0.8rem;
    --font-regular: 1rem;
    --font-big: 1.4rem;
    --font-extra: 1.6rem;
    
    --gap-verySmall: 4px;
    --gap-small: 8px;
    --gap-regular: 12px;
    --gap-medium: 16px;
    --gap-big: 24px;
    --gap-large: 32px;
    --gap-extra: 48px;

    --radius-small: 2px;
    --radius-regular: 6px;
    --radius-big: 12px;
  }


  html, body {
    width: 100%;
    height: 100%;
    
    &, *{
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
  }

  .react-confirm-alert-overlay {
    background: rgba(0, 0, 0, 0.1);
  }

  .__react_component_tooltip {
    max-width: 300px;
    font-size: var(--font-small);
    white-space: pre-line;
  }
`;
