import {Platform, StyleSheet} from 'react-native';

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: isIOS ? '#212121' : '#EEEEEE',
  },
  mainContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
});

export default styles;
