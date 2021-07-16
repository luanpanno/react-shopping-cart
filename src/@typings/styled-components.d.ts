import { theme } from '../assets/styles/Theme';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends CustomTheme {}
}
