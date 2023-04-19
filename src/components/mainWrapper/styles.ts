import styled from 'styled-components/native';
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const Wrapper = styled.SafeAreaView`
  background-color: ${({theme}) =>
    isIOS ? theme.colors.darkGray : theme.colors.light};
`;

export const MainView = styled.View`
  height: 100%;
  justify-content: space-between;
`;
