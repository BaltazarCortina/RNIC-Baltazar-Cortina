import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import EditTask from '../../screens/editTask';
import {Routes} from '../../types/routes';
import TabNavigator from '../tab';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={Routes.TAB_NAVIGATOR}
        options={{title: 'List'}}
        component={TabNavigator}
      />
      <Stack.Screen
        name={Routes.EDIT_TASK}
        options={{title: 'Edit Task'}}
        component={EditTask}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
