import styled from 'styled-components';

export const Text = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: -8px;
  right: -8px;
  background-color: var(--colors-secondary);
  border-radius: 50%;
  font-size: var(--font-small);
  color: var(--colors-white);
  height: 21px;
  width: 21px;
  font-weight: bold;
`;
