import {Platform, StyleSheet} from 'react-native';

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  listHeaderContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderBottomColor: '#FFC107',
    borderBottomWidth: 2,
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: isIOS ? '#EEEEEE' : '#212121',
  },
  emptyListMessageContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  emptyListMessageText: {
    fontSize: 16,
    textAlign: 'center',
    color: isIOS ? '#EEEEEE' : '#212121',
  },
});

export default styles;
