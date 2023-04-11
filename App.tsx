/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {AppState} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import MainScreen from './src/components/mainScreen';
import {mockTasks} from './src/utils/mocks/tasks';

function App(): JSX.Element {
  const [tasksList, setTasksList] = useState(mockTasks);

  useEffect(() => {
    RNBootSplash.hide({fade: true});
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        setTasksList(mockTasks);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <>
      <MainScreen tasksList={tasksList} setTasksList={setTasksList} />
    </>
  );
}

export default App;
