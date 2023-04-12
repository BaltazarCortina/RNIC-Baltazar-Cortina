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

export const CardLayout = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: 20%;
`;

export const CardImage = styled.Image`
  height: 60px;
  margin-bottom: 10px
  aspect-ratio: 1;
  border-radius: 15px;
`;

export const TextContainer = styled.View`
  flex: 1;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const CardTitle = styled.Text<{status: boolean}>`
  flex: 1;
  font-family: Lato-Bold;
  font-size: 18px;
  padding: 0 10px 5px 0;
  color: ${({theme}) => (isIOS ? theme.colors.white : theme.colors.lightGray)};
  text-decoration-line: ${({status}) => (status ? 'line-through' : 'none')};
`;

export const CardDescription = styled.Text<{status: boolean}>`
  font-family: Lato-Light;
  font-size: 16px;
  color: ${({theme}) => (isIOS ? theme.colors.white : theme.colors.lightGray)};
  text-decoration-line: ${({status}) => (status ? 'line-through' : 'none')};
`;

export const CardStatus = styled.View<{status: boolean}>`
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 10px;
`;
