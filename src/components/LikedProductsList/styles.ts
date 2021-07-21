import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 56px;
  right: -132px;
  background-color: var(--colors-white);
  padding: var(--gap-medium);
  width: 300px;
  border-radius: var(--radius-regular);
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;

  &::before {
    position: absolute;
    content: '';
    background-color: var(--colors-white);
    height: var(--gap-medium);
    width: var(--gap-medium);
    top: -8px;
    right: calc(50% - var(--gap-small));
    transform: rotate(45deg);
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: var(--gap-medium);
  }

  @media screen and (max-width: 1120px) {
    right: calc(-1vw - 24px);

    &::before {
      right: calc(-1vw + 54px);
    }
  }

  @media screen and (max-width: 800px) {
    right: calc(-1vw - 24px);

    &::before {
      right: calc(-1vw + 44px);
    }
  }

  @media screen and (max-width: 400px) {
    position: fixed;
    top: 80px;
    width: 100vw;
    right: 0;

    &::before {
      right: calc(-1vw + 85px);
    }
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: var(--gap-extra) 1fr var(--gap-large);
  align-items: center;
  gap: var(--gap-regular);
  align-items: center;
  font-size: var(--font-regular);

  &:not(:last-child) {
    border-bottom: 1px solid var(--colors-grey4);
    padding-bottom: var(--gap-medium);
  }

  .img-container {
    max-width: var(--gap-extra);
    max-height: var(--gap-large);
    overflow: hidden;
    border-radius: var(--radius-small);

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
      color: var(--colors-grey2);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-regular);
  }
`;
