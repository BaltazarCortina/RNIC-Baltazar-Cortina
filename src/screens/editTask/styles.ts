import styled from 'styled-components/native';
import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const Wrapper = styled.View`
  background-color: ${({theme}) =>
    isIOS ? theme.colors.darkGray : theme.colors.light};
  flex: 1;
`;
