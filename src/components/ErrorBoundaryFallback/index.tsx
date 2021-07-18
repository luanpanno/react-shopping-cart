import Logo from '@assets/imgs/logo-liven.webp';

import { Container, Content, Button, ErrorContainer } from './styles';

const ErrorBoundaryFallback = () => {
  function backPage() {
    window.history.back();
  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo-liven" />
        <h1>Oops! Algo deu errado</h1>
        <ErrorContainer>
          <p>
            Desculpe, algo de errado aconteceu nesta página. Para mais
            informações, contate a equipe técnica responsável
          </p>
        </ErrorContainer>
        <div className="buttons">
          <Button type="button" onClick={backPage}>
            Back Page
          </Button>
          <Button type="button" onClick={refreshPage}>
            Refresh Page
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default ErrorBoundaryFallback;
