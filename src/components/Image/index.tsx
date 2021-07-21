import { useState } from 'react';

import DefaultImg from '@assets/imgs/default-placeholder.png';

import { Container } from './styles';

interface Props {
  src: string;
  alt: string;
}

const Image: React.FC<Props> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container loaded={loaded}>
      <img src={DefaultImg} alt={alt} className="default" />
      <img
        src={src}
        alt={alt}
        className="actual"
        onLoad={() => setLoaded(true)}
      />
    </Container>
  );
};

export default Image;
