import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@assets/styles/GlobalStyles';
import { theme } from '@assets/styles/Theme';
import ErrorBoundaryFallback from '@components/ErrorBoundaryFallback';

import { StoreProvider } from '@contexts/StoreContext';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <ToastContainer />

      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <BrowserRouter>
          <StoreProvider>
            <Routes />
          </StoreProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
