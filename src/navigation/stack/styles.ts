import styled from 'styled-components/native';
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const StackNavHeaderContainer = styled.View`
  flex-direction: row;
  margin: 5px 0;
  border-bottom-color: ${({theme}) => theme.colors.accent};
  border-bottom-width: 2px;
`;

export const BackIconContainer = styled.TouchableHighlight`
  width: 50px;
  align-items: center;
  margin: 0 15px 5px;
  border-radius: 15px;
  box-sizing: border-box;
`;

export const StackNavHeaderMessageContainer = styled.View`
  flex-grow: 1;
  align-items: center;
  margin-right: 80px;
  padding: 5px 10px 10px;
`;

export const StackNavHeaderMessageText = styled.Text`
  font-family: Lato-Bold;
  font-size: 20px;
  text-align: center;
  color: ${({theme}) => (isIOS ? theme.colors.light : theme.colors.darkGray)};
`;
