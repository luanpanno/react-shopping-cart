import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 56px;
  right: -80px;
  background-color: #fff;
  padding: 16px;
  width: 200px;
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
    row-gap: 12px;
  }
`;

export const Item = styled.li``;
