import { createGlobalStyle } from 'styled-components';

import { Reset } from './Reset';

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

`;
