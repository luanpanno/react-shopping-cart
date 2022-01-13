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
        <h1>Oops! Algo deu errado</h1>
        <ErrorContainer>
          <p>
            Desculpe, algo de errado aconteceu nesta página. Tente novamente
            mais tarde.
          </p>
        </ErrorContainer>
        <div className="buttons">
          <Button type="button" onClick={backPage}>
            Voltar
          </Button>
          <Button type="button" onClick={refreshPage}>
            Atualizar
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default ErrorBoundaryFallback;
