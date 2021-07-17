import React, { ReactNode } from 'react';

import { Container, Header, Main } from './styles';

interface Props {
  title?: string;
  headerComplements?: ReactNode;
}

const Content: React.FC<Props> = ({ title, headerComplements, children }) => {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        {headerComplements}
      </Header>
      <Main>{children}</Main>
    </Container>
  );
};

export default Content;
