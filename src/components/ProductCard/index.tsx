import { useMemo } from 'react';

import Icons from '@components/Icons';
import Image from '@components/Image';
import Tooltip from '@components/Tooltip';

import { useStore } from '@contexts/StoreContext';
import { Product } from '@models/domain/Product';
import { generateTooltipId } from '@utils/generateTooltipId';
import { masks } from '@utils/masks';

import { Container, Text, LikeButton, AddCartButton } from './styles';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    handleCartProducts,
    cartProducts,
    handleLikedProducts,
    likedProducts,
  } = useStore();
  const alreadyInCart = useMemo(
    () => cartProducts?.some((item) => item.id === product.id),
    [cartProducts, product]
  );
  const alreadyLiked = useMemo(
    () => likedProducts?.some((id) => id === product.id),
    [likedProducts, product]
  );
  const tooltipId = useMemo(
    () => generateTooltipId(product?.id, 'like'),
    [product]
  );

  return (
    <Container data-cy="product-card">
      <Image src={product.image} alt={product.name} className="img-container" />
      <Text>
        <div className="product-info">
          <div>
            <span className="name">{product?.name}</span>
            <LikeButton
              type="button"
              onClick={() => handleLikedProducts(product?.id)}
              selected={alreadyLiked}
              data-for={tooltipId}
              data-tip="Favoritar"
              data-cy="like-button"
            >
              {alreadyLiked ? <Icons.HeartFill /> : <Icons.HeartLine />}
            </LikeButton>
            <Tooltip id={tooltipId} />
          </div>
          <span className="stock">{product?.stock} restantes</span>
        </div>
        <span className="price">R$ {masks.decimal(product?.price)}</span>
      </Text>
      <AddCartButton
        type="button"
        onClick={() => handleCartProducts(product)}
        selected={alreadyInCart}
        data-cy="add-cart-button"
      >
        <span>
          {alreadyInCart ? 'Adicionado ao carrinho!' : 'Adicionar ao carrinho'}
        </span>
      </AddCartButton>
    </Container>
  );
};

export default ProductCard;
