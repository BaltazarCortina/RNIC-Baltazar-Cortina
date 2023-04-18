import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import AddTask from '../../screens/addTask';
import TasksList from '../../screens/tasksList';
import {Routes} from '../../types/routes';
import ListSvg from '../../assets/icons/list';
import AddSvg from '../../assets/icons/add';
import {SvgProps} from 'react-native-svg';
import {theme} from '../../constants/theme';

const Tab = createBottomTabNavigator();

const NavBarIcon = (Icon: (props: SvgProps) => JSX.Element) => {
  return (props: any) => (
    <Icon
      color={props.focused ? theme.colors.accent : theme.colors.light}
      width={28}
      height={28}
    />
  );
};

const ListIcon = NavBarIcon(ListSvg);
const AddIcon = NavBarIcon(AddSvg);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.TASK_LIST}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {color: theme.colors.light, fontSize: 12},
        tabBarStyle: {backgroundColor: theme.colors.darkGray},
      }}>
      <Tab.Screen
        name={Routes.TASK_LIST}
        options={{title: 'List', tabBarIcon: ListIcon}}
        component={TasksList}
      />
      <Tab.Screen
        name={Routes.ADD_TASK}
        options={{
          title: 'Add Task',
          tabBarIcon: AddIcon,
        }}
        component={AddTask}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
