import { useMemo } from 'react';
import { RiHeartLine } from 'react-icons/ri';

import { useProduct } from '@contexts/ProductContext';
import { Product } from '@models/domain/Product';

import { Container, ImgContainer, Text, AddCartButton } from './styles';

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({ product }) => {
  const { handleCartProducts, cartProducts } = useProduct();
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
        <span className="price">R$ {product?.price}</span>
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

export default Card;
