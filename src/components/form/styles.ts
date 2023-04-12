import styled from 'styled-components/native';
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const AddForm = styled.View`
  padding: 10px;
  margin-top: 5px;
  border-top-color: ${({theme}) => theme.colors.accent};
  border-top-width: 2px;
  background-color: ${({theme}) =>
    isIOS ? theme.colors.lightGray : theme.colors.white};
`;

export const FormTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 10px;
  color: ${({theme}) => (isIOS ? theme.colors.light : theme.colors.darkGray)};
`;

export const FormField = styled.View`
  padding-bottom: 10px;
`;

export const FormInput = styled.TextInput`
  height: 40px;
  padding: 5px 15px;
  border-color: ${({theme}) =>
    isIOS ? theme.colors.white : theme.colors.lightGray};
  border-width: 1px;
  border-radius: 15px;
  color: ${({theme}) => (isIOS ? theme.colors.white : theme.colors.lightGray)};
`;

export const FormButtonContainer = styled.View`
  align-items: center;
`;

export const FormButtonTouchable = styled.TouchableHighlight`
  border-radius: 10px;
`;

export const FormButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100px;
  padding: 8px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.accent};
`;

export const FormButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: ${({theme}) => theme.colors.lightGray};
`;
