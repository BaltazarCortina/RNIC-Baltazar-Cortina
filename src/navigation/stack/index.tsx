import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {useTheme} from 'styled-components/native';

import EditTask from '../../screens/editTask';
import {Routes} from '../../types/routes';
import TabNavigator from '../tab';
import {
  BackIconContainer,
  StackNavHeaderContainer,
  StackNavHeaderMessageContainer,
  StackNavHeaderMessageText,
} from './styles';
import BackSvg from '../../assets/icons/back';
import {Platform} from 'react-native';

const StackNavHeader = ({options, navigation}: NativeStackHeaderProps) => {
  const theme = useTheme();
  const isIOS = Platform.OS === 'ios';

  return (
    <StackNavHeaderContainer>
      <BackIconContainer
        onPress={() => navigation.goBack()}
        underlayColor={isIOS ? theme.colors.lightGray : theme.colors.white}>
        <BackSvg color={theme.colors.light} height={32} width={32} />
      </BackIconContainer>
      <StackNavHeaderMessageContainer>
        <StackNavHeaderMessageText>{options.title}</StackNavHeaderMessageText>
      </StackNavHeaderMessageContainer>
    </StackNavHeaderContainer>
  );
};

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: StackNavHeader,
      }}>
      <Stack.Screen
        name={Routes.TAB_NAVIGATOR}
        options={{
          title: 'List',
          headerShown: false,
        }}
        component={TabNavigator}
      />
      <Stack.Screen
        name={Routes.EDIT_TASK}
        options={{
          title: 'Edit Task',
        }}
        component={EditTask}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
