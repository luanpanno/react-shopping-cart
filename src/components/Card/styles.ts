import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transition: all 400ms;

  &:hover {
    box-shadow: 4px 8px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

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
  row-gap: 12px;
  padding: 12px;

  .product-info {
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
      }

      svg {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colors.secondary};
      }
    }

    .stock {
      color: #aaa;
      font-size: 0.9rem;
    }
  }

  .price {
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    margin: 8px 0;
    font-size: 1.2rem;
  }
`;

export const AddCartButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  padding: 12px 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: all 200ms;

  &:hover {
    opacity: 0.9;
  }
`;
