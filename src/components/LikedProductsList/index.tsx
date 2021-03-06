import Icons from '@components/Icons';
import Image from '@components/Image';
import NoContentText from '@components/NoContentText';
import Tooltip from '@components/Tooltip';

import { useStore } from '@contexts/StoreContext';
import { generateTooltipId } from '@utils/generateTooltipId';
import { masks } from '@utils/masks';

import { Container, Item } from './styles';

const LikedProductsList = () => {
  const { likedProducts, products, handleLikedProducts } = useStore();

  return (
    <Container>
      <ul>
        {(likedProducts?.length <= 0 || products?.length <= 0) && (
          <NoContentText>Nenhum produto favoritado.</NoContentText>
        )}

        {products?.length > 0 &&
          likedProducts?.map((item) => {
            const likedProduct = products?.find(
              (product) => product.id === item
            );
            const tooltipId = generateTooltipId(
              likedProduct?.id,
              'liked-products'
            );

            return (
              <Item key={likedProduct?.id} data-cy="liked-product">
                <Image
                  src={likedProduct?.image}
                  alt={likedProduct?.name}
                  className="img-container"
                />
                <div className="text">
                  <span className="name">{likedProduct?.name}</span>
                  <span className="price">
                    R$ {masks.decimal(likedProduct?.price)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleLikedProducts(likedProduct?.id)}
                  data-for={tooltipId}
                  data-tip="Remover"
                  data-cy="remove-liked-product"
                >
                  <Icons.Remove />
                </button>
                <Tooltip id={tooltipId} />
              </Item>
            );
          })}
      </ul>
    </Container>
  );
};

export default LikedProductsList;
