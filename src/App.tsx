import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './assets/styles/GlobalStyles';
import { theme } from './assets/styles/Theme';
import Routes from './routes';
import { ProductProvider } from './shared/contexts/ProductContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <BrowserRouter>
        <ProductProvider>
          <Routes />
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
