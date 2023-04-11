import {Platform, StyleSheet} from 'react-native';

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  form: {
    padding: 10,
    marginTop: 5,
    borderTopColor: '#FFC107',
    borderTopWidth: 2,
    backgroundColor: isIOS ? '#333333' : '#F5F5F5',
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 10,
    color: isIOS ? '#EEEEEE' : '#212121',
  },
  formField: {
    paddingBottom: 10,
  },
  formInput: {
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: isIOS ? '#F5F5F5' : '#333333',
    borderRadius: 15,
    color: isIOS ? '#F5F5F5' : '#333333',
  },
  formButtonContainer: {
    alignItems: 'center',
  },
  formButtonTouchable: {
    borderRadius: 10,
  },
  formButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: 100,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#FFC107',
  },
  formButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333333',
  },
});

export default styles;
