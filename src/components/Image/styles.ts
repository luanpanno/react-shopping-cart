import styled from 'styled-components';

interface Props {
  loaded: boolean;
}

export const Container = styled.div<Props>`
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }

  .default {
    display: ${(props) => props.loaded && 'none'};
  }
`;
