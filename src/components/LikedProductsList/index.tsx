import { useStore } from '@contexts/StoreContext';

import { Container, Item } from './styles';

const LikedProductsList = () => {
  const { likedProducts, products } = useStore();

  return (
    <Container>
      <ul>
        {likedProducts?.map((item) => {
          const likedProduct = products?.find((product) => product.id === item);

          return <Item>{likedProduct?.name}</Item>;
        })}
      </ul>
    </Container>
  );
};

export default LikedProductsList;
