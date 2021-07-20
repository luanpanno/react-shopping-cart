import styled from 'styled-components';

export const Text = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: -4px;
  right: -4px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  font-size: 0.7rem;
  color: white;
  height: 20px;
  width: 20px;
  font-weight: bold;
`;
