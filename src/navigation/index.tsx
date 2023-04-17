import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './stack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
