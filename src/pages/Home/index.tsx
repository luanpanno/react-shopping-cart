import { useState, useEffect, useRef } from 'react';

import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { useProduct } from '../../shared/contexts/ProductContext';
import { Container } from './styles';

const Home = () => {
  const { products, setProducts, listProducts } = useProduct();
  const [loadingProducts, setLoadingProducts] = useState(false);
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

  if (loadingProducts) return <Loading />;

  return (
    <Container>
      {products?.map((product) => {
        return <Card product={product} />;
      })}
    </Container>
  );
};

export default Home;
