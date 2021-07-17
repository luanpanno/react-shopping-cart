import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@assets/styles/GlobalStyles';
import { theme } from '@assets/styles/Theme';

import { StoreProvider } from '@contexts/StoreContext';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <ToastContainer />

      <BrowserRouter>
        <StoreProvider>
          <Routes />
        </StoreProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
