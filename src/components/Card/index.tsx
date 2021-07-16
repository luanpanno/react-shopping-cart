import { Product } from '../../shared/models/domain/Product';
import { Container } from './styles';

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({ product }) => {
  return <Container>{product?.name}</Container>;
};

export default Card;
