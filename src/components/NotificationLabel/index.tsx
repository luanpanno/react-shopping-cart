import { Text } from './styles';

interface Props {
  value: number;
  dataCy?: string;
}

const NotificationLabel: React.FC<Props> = ({ value, dataCy }) => {
  function handleAmountNumber(amount: number) {
    return amount >= 100 ? '99+' : amount;
  }

  return <Text data-cy={dataCy}>{handleAmountNumber(value)}</Text>;
};

export default NotificationLabel;
