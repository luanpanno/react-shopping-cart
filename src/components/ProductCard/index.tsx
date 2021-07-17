import { useMemo } from 'react';
import { RiHeartLine } from 'react-icons/ri';

import { useStore } from '@contexts/StoreContext';
import { Product } from '@models/domain/Product';
import { masks } from '@utils/masks';

import { Container, ImgContainer, Text, AddCartButton } from './styles';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { handleCartProducts, cartProducts } = useStore();
  const alreadyInCart = useMemo(
    () => cartProducts?.some((item) => item.id === product.id),
    [cartProducts, product]
  );

  return (
    <Container>
      <ImgContainer>
        <img src={product.image} alt={product.name} />
      </ImgContainer>
      <Text>
        <div className="product-info">
          <div>
            <span className="name">{product?.name}</span>
            <button type="button">
              <RiHeartLine />
            </button>
          </div>
          <span className="stock">{product?.stock} restantes</span>
        </div>
        <span className="price">R$ {masks.decimal(product?.price)}</span>
      </Text>
      <AddCartButton
        type="button"
        onClick={() => handleCartProducts(product)}
        selected={alreadyInCart}
      >
        <span>
          {alreadyInCart ? 'Adicionado ao carrinho!' : 'Adicionar ao carrinho'}
        </span>
      </AddCartButton>
    </Container>
  );
};

export default ProductCard;
