/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';

import MainWrapper from './src/components/mainWrapper';
import {theme} from './src/constants/theme';
import Navigation from './src/navigation';

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Navigation />
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
