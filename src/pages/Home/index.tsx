import { useEffect, useMemo } from 'react';
import { RiLayoutGridLine, RiLayoutRowLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

import Loading from '@components/Loading';
import NoContentText from '@components/NoContentText';
import ProductCard from '@components/ProductCard';
import Tooltip from '@components/Tooltip';
import Content from '@containers/Content';

import { useStore } from '@contexts/StoreContext';

import { HeaderContent, Products } from './styles';

const Home = () => {
  const { search } = useLocation();
  const { products, loadingProducts, listProducts } = useStore();
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
    listProducts();
  }, [listProducts, query]);

  if (loadingProducts && products?.length <= 0) {
    return <Loading />;
  }

  return (
    <Content
      title="Produtos"
      headerComplements={
        <HeaderContent>
          <span>{filteredProducts?.length} resultado(s)</span>
          <button
            type="button"
            data-for="row-layout"
            data-tip="Exibir em linhas"
          >
            <RiLayoutRowLine />
          </button>
          <Tooltip id="row-layout" />
          <button
            type="button"
            className="active"
            data-for="grid-layout"
            data-tip="Exibir em colunas"
          >
            <RiLayoutGridLine />
          </button>
          <Tooltip id="grid-layout" />
        </HeaderContent>
      }
    >
      {!loadingProducts && filteredProducts?.length <= 0 && (
        <NoContentText>Nenhum produto encontrado.</NoContentText>
      )}

      <Products>
        {filteredProducts?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Products>
    </Content>
  );
};

export default Home;
