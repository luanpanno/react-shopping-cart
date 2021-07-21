import { confirmAlert } from 'react-confirm-alert';

import Icons from '@components/Icons';

import { Container, Header, Main, Button, ButtonOutline } from './styles';

interface Props {
  text: string;
  close(): void;
  action(): void;
}

const ConfirmAlert: React.FC<Props> = ({ text, close, action }) => {
  function handleConfirm() {
    close();
    action();
  }

  return (
    <Container>
      <Header>
        <button type="button" onClick={close}>
          <Icons.Close />
        </button>
      </Header>
      <Main>
        <p>{text}</p>
        <div className="buttons">
          <ButtonOutline type="button" onClick={close} data-cy="close-confirm">
            Cancelar
          </ButtonOutline>

          <Button type="button" onClick={handleConfirm} data-cy="confirm-alert">
            Confirmar
          </Button>
        </div>
      </Main>
    </Container>
  );
};

const confirmHandler = (text: string, handleDelete: () => void) => {
  return confirmAlert({
    customUI: ({ onClose }) => {
      return <ConfirmAlert text={text} close={onClose} action={handleDelete} />;
    },
  });
};

export default confirmHandler;
