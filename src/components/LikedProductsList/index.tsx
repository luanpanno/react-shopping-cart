import { RiCloseCircleFill } from 'react-icons/ri';

import NoContentText from '@components/NoContentText';

import { useStore } from '@contexts/StoreContext';
import { masks } from '@utils/masks';

import { Container, Item } from './styles';

const LikedProductsList = () => {
  const { likedProducts, products, handleLikedProducts } = useStore();

  return (
    <Container>
      <ul>
        {likedProducts?.length <= 0 && (
          <NoContentText>Nenhum produto favoritado.</NoContentText>
        )}

        {likedProducts?.map((item) => {
          const { id, image, name, price } = products?.find(
            (product) => product.id === item
          );

          return (
            <Item key={id}>
              <div className="img-container">
                <img src={image} alt={image} />
              </div>
              <div className="text">
                <span className="name">{name}</span>
                <span className="price">R$ {masks.decimal(price)}</span>
              </div>
              <button type="button" onClick={() => handleLikedProducts(id)}>
                <RiCloseCircleFill />
              </button>
            </Item>
          );
        })}
      </ul>
    </Container>
  );
};

export default LikedProductsList;
