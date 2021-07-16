import { useState, useEffect, useRef } from 'react';

import Card from '../../components/Card';
import { useProduct } from '../../shared/contexts/ProductContext';
import { Container } from './styles';

const Home = () => {
  const { products, setProducts, listProducts } = useProduct();
  const [, setLoadingProducts] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    setLoadingProducts(true);

    listProducts()
      .then((response) => {
        if (mounted.current) setProducts(response);
      })
      .finally(() => setLoadingProducts(false));
  }, [listProducts, setProducts]);

  return (
    <Container>
      {products?.map((product) => {
        return <Card product={product} />;
      })}
    </Container>
  );
};

export default Home;
