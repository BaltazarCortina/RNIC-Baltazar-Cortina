import styled from 'styled-components/native';
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const AddForm = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px 10px 20px;
  background-color: ${({theme}) =>
    isIOS ? theme.colors.lightGray : theme.colors.white};
`;

export const FormFields = styled.View`
  padding-bottom: 10px;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 40px 0 50px;
`;

export const CardImage = styled.Image`
  width: 200px;
  aspect-ratio: 1;
  border-radius: 15px;
`;

export const FormField = styled.View`
  padding-bottom: 20px;
`;

export const FormInput = styled.TextInput<{longInput?: boolean}>`
  font-family: Lato-Italic;
  font-size: 16px;
  height: ${({longInput}) => (!longInput ? '50px' : '150px')};
  padding: 15px;
  border-color: ${({theme}) =>
    isIOS ? theme.colors.white : theme.colors.lightGray};
  border-width: 1px;
  border-radius: 15px;
  color: ${({theme}) => (isIOS ? theme.colors.white : theme.colors.lightGray)};
`;

export const FormButtonContainer = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0 20px;
`;

export const FormButtonTouchable = styled.TouchableHighlight`
  border-radius: 10px;
`;

export const FormButton = styled.View<{type?: 'delete'}>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 120px;
  padding: 8px;
  border-radius: 10px;
  background-color: ${({theme, type}) =>
    type === 'delete' ? theme.colors.red : theme.colors.accent};
`;

export const FormButtonText = styled.Text`
  font-family: Lato-Bold;
  font-size: 16px;
  text-align: center;
  color: ${({theme}) => theme.colors.lightGray};
`;
