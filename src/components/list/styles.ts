import styled from 'styled-components/native';
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const EmptyListMessageContainer = styled.View`
  flex-grow: 1;
  padding: 30px 10px;
`;

export const EmptyListMessageText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({theme}) => (isIOS ? theme.colors.light : theme.colors.darkGray)};
`;

export const ListHeaderMessageContainer = styled.View`
  padding: 5px 10px;
  margin: 5px 0;
  border-bottom-color: ${({theme}) => theme.colors.accent};
  border-bottom-width: 2px;
`;

export const ListHeaderMessageText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: ${({theme}) => (isIOS ? theme.colors.light : theme.colors.darkGray)};
`;
