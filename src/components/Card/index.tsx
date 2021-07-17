import { RiHeartLine } from 'react-icons/ri';

import { Product } from '@models/domain/Product';

import { Container, ImgContainer, Text, AddCartButton } from './styles';

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({ product }) => {
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
      <AddCartButton type="button">Adicionar ao carrinho</AddCartButton>
    </Container>
  );
};

export default Card;
