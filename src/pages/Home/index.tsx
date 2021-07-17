import { useEffect } from 'react';
import { RiLayoutGridLine, RiLayoutRowLine } from 'react-icons/ri';

import Card from '@components/Card';
import Loading from '@components/Loading';

import { useProduct } from '@contexts/ProductContext';

import { Container, Content, Products } from './styles';

const Home = () => {
  const { products, loadingProducts, listProducts } = useProduct();

  useEffect(() => {
    listProducts();
  }, [listProducts]);

  if (loadingProducts) return <Loading />;

  return (
    <Container>
      <Content>
        <div className="title">
          <h1>Produtos</h1>
          <div>
            <span>{products?.length} resultados</span>
            <button type="button">
              <RiLayoutRowLine />
            </button>
            <button type="button" className="active">
              <RiLayoutGridLine />
            </button>
          </div>
        </div>

        <Products>
          {products?.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </Products>
      </Content>
    </Container>
  );
};

export default Home;
