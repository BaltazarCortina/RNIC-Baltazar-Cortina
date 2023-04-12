import styled from 'styled-components/native';
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const CardContainer = styled.View`
  margin: 0 5px 5px;
`;

export const CardComponent = styled.TouchableHighlight`
  padding: 10px;
  border-radius: 15px;
  background-color: ${({theme}) =>
    isIOS ? theme.colors.lightGray : theme.colors.white};
  elevation: 3;
  shadow-color: ${({theme}) => theme.colors.lightGray};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 1px;
`;

export const CardTitle = styled.Text<{status: boolean}>`
  font-family: Lato-Bold;
  font-size: 18px;
  padding-bottom: 5px;
  color: ${({theme}) => (isIOS ? theme.colors.white : theme.colors.lightGray)};
  text-decoration-line: ${({status}) => (status ? 'line-through' : 'none')};
`;

export const CardDescription = styled.Text<{status: boolean}>`
  font-family: Lato-Light;
  font-size: 16px;
  color: ${({theme}) => (isIOS ? theme.colors.white : theme.colors.lightGray)};
  text-decoration-line: ${({status}) => (status ? 'line-through' : 'none')};
`;

export const CardStatus = styled.Text<{status: boolean}>`
  font-size: 14px;
  font-family: Lato-BoldItalic;
  text-align: right;
  padding-top: 5px;
  color: ${({status, theme}) =>
    status ? theme.colors.green : theme.colors.red};
`;
