import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Loading from '@components/Loading';
import NoContentText from '@components/NoContentText';
import ProductCard from '@components/ProductCard';
import Content from '@containers/Content';

import { useStore } from '@contexts/StoreContext';
import { urlSearchParams } from '@utils/urlSearchParams';

import { Products } from './styles';

const Home = () => {
  const { search } = useLocation();
  const { products, loadingProducts } = useStore();
  const query = useMemo(() => urlSearchParams(search, 'q'), [search]);
  const filteredProducts = useMemo(() => {
    if (query) {
      return products?.filter((product) =>
        product.name.toLowerCase().includes(query?.toLocaleLowerCase())
      );
    }

    return products;
  }, [products, query]);

  if (loadingProducts && products?.length <= 0) {
    return <Loading />;
  }

  return (
    <Content
      title="Produtos"
      countText={`${filteredProducts?.length} resultado(s)`}
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
