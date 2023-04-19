/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components/native';

import MainWrapper from './src/components/mainWrapper';
import {theme} from './src/constants/theme';
import Navigation from './src/navigation';
import {persistor, store} from './src/redux/store';

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MainWrapper>
            <Navigation />
          </MainWrapper>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
