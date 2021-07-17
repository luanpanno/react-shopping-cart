import { confirmAlert } from 'react-confirm-alert';
import { RiCloseFill } from 'react-icons/ri';

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
          <RiCloseFill />
        </button>
      </Header>
      <Main>
        <p>{text}</p>
        <div className="buttons">
          <ButtonOutline type="button" onClick={close}>
            Cancelar
          </ButtonOutline>

          <Button type="button" onClick={handleConfirm}>
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
