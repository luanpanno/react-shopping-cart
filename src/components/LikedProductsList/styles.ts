import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 56px;
  right: -325%;
  background-color: #fff;
  padding: 16px;
  width: 300px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);
  z-index: 2;

  &::before {
    position: absolute;
    content: '';
    background-color: #fff;
    height: 16px;
    width: 16px;
    top: -8px;
    right: calc(50% - 8px);
    transform: rotate(45deg);
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr 32px;
  align-items: center;
  gap: 12px;
  align-items: center;
  font-size: 0.9rem;

  &:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 16px;
  }

  .img-container {
    max-width: 50px;
    max-height: 32px;
    overflow: hidden;
    border-radius: 2px;

    img {
      width: 100%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;

    .name {
      display: inline-block;
      overflow: hidden;
      width: 150px;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
    }

    .price {
      color: #888;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`;
