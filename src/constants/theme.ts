import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
  }
}

const theme = {
  colors: {
    accent: '#FFC107',
    darkGray: '#212121',
    lightGray: '#333333',
    highlight: '#c2c2c2',
    light: '#EEEEEE',
    white: '#F5F5F5',
    green: '#2b9348',
    red: '#C71F37',
  },
};

export {theme};
