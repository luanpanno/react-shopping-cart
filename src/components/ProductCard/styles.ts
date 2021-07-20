import styled from 'styled-components';

interface ButtonProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-regular);
  transition: all 400ms;

  &:hover {
    box-shadow: 4px 8px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-top-left-radius: var(--radius-regular);
  border-top-right-radius: var(--radius-regular);
  height: 200px;

  img {
    height: 100%;
    width: 100%;
    transition: all 200ms;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: var(--gap-regular);
  padding: var(--gap-regular);

  .product-info {
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .stock {
      color: var(--colors-grey2);
      font-size: var(--font-small);
    }
  }

  .price {
    text-align: center;
    color: var(--colors-primary);
    font-weight: bold;
    margin: var(--gap-small) 0;
    font-size: var(--font-big);
  }
`;

export const LikeButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-big);
  color: var(--colors-secondary);
  transition: all 200ms;

  &:hover {
    transform: scale(1.3);
    color: ${(props) => props.selected && 'var(--colors-red)'};
  }
`;

export const AddCartButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.selected ? 'var(--colors-yellow)' : 'var(--colors-secondary)'};
  color: var(--colors-white);
  padding: var(--gap-regular) 0;
  border-bottom-left-radius: var(--radius-regular);
  border-bottom-right-radius: var(--radius-regular);
  transition: all 200ms;

  &:hover {
    opacity: 0.9;
    background-color: ${(props) => props.selected && 'var(--colors-red)'};

    span {
      display: ${(props) => props.selected && 'none'};
    }

    &::after {
      display: ${(props) => !props.selected && 'none'};
      content: 'Remover do carrinho';
    }
  }
`;
