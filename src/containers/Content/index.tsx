import { Container, Header, Main } from './styles';

interface Props {
  title?: string;
  countText?: string;
}

const Content: React.FC<Props> = ({ title, countText, children }) => {
  return (
    <Container>
      <Header>
        {title && <h1>{title}</h1>}
        {countText && <span data-cy="header-count-text">{countText}</span>}
      </Header>
      <Main>{children}</Main>
    </Container>
  );
};

export default Content;
