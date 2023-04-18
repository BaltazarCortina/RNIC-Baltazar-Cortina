import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  TAB_NAVIGATOR: NavigatorScreenParams<RootTabParamList>;
  EDIT_TASK: undefined;
};

export type RootTabParamList = {
  TASK_LIST: undefined;
  ADD_TASK: undefined;
};

export type RootParamsList = RootStackParamList & RootTabParamList;
