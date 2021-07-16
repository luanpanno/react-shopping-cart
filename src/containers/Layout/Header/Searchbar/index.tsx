import { Container, InputWrapper } from './styles';

const Searchbar = () => {
  return (
    <Container>
      <InputWrapper>
        <input type="text" />
        <button type="button">x</button>
      </InputWrapper>
      <button type="button">search</button>
    </Container>
  );
};

export default Searchbar;
