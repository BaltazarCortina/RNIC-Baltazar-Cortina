import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import AddTask from '../../screens/addTask';
import TasksList from '../../screens/tasksList';
import {Routes} from '../../types/routes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.TASK_LIST}>
      <Tab.Screen
        name={Routes.TASK_LIST}
        options={{title: 'List'}}
        component={TasksList}
      />
      <Tab.Screen
        name={Routes.ADD_TASK}
        options={{title: 'Add Task'}}
        component={AddTask}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
