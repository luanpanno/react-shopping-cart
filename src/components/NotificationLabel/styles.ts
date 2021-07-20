import styled from 'styled-components';

export const Text = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  font-size: 0.7rem;
  color: white;
  height: 24px;
  width: 24px;
  font-weight: bold;
`;