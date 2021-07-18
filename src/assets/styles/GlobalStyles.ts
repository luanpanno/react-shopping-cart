import { createGlobalStyle } from 'styled-components';

import { Reset } from './Reset';

import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

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
    font-size: 0.9rem;
    white-space: pre-line;
  }
`;
