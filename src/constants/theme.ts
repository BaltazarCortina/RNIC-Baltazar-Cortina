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
    white: '#F5F5F5',
    light: '#EEEEEE',
    green: '#2b9348',
    red: '#9a031e',
  },
};

export {theme};
