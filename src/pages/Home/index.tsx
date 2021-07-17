import { useEffect, useMemo } from 'react';
import { RiLayoutGridLine, RiLayoutRowLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

import Card from '@components/Card';
import Loading from '@components/Loading';
import NoContentText from '@components/NoContentText';
import Content from '@containers/Content';

import { useProduct } from '@contexts/ProductContext';

import { Container, HeaderContent, Products } from './styles';

const Home = () => {
  const { search } = useLocation();
  const { products, loadingProducts, listProducts } = useProduct();
  const query = useMemo(() => new URLSearchParams(search).get('q'), [search]);
  const filteredProducts = useMemo(() => {
    if (query) {
      return products?.filter((product) =>
        product.name.toLowerCase().includes(query?.toLocaleLowerCase())
      );
    }

    return products;
  }, [products, query]);

  useEffect(() => {
    if (!query) listProducts();
  }, [listProducts, query]);

  return (
    <Container>
      <Content
        title="Produtos"
        headerComplements={
          <HeaderContent>
            <span>{filteredProducts?.length} resultados</span>
            <button type="button">
              <RiLayoutRowLine />
            </button>
            <button type="button" className="active">
              <RiLayoutGridLine />
            </button>
          </HeaderContent>
        }
      >
        {loadingProducts && products?.length <= 0 && <Loading />}

        {!loadingProducts && filteredProducts?.length <= 0 && (
          <NoContentText>Nenhum resultado encontrado.</NoContentText>
        )}

        <Products>
          {filteredProducts?.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </Products>
      </Content>
    </Container>
  );
};

export default Home;
