import {Platform, StyleSheet} from 'react-native';

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    marginTop: 0,
  },
  card: {
    paddingBottom: 10,
    borderRadius: 15,
    padding: 10,
    backgroundColor: isIOS ? '#333333' : '#FFF',
    elevation: 3,
    shadowColor: '#333333',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  cardTitle: {
    color: isIOS ? '#F5F5F5' : '#333333',
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: '600',
  },
  cardDescription: {
    color: isIOS ? '#F5F5F5' : '#333333',
    fontSize: 16,
    fontWeight: '300',
  },
  cardStatus: {
    paddingTop: 5,
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '500',
  },
  cardStatusDone: {
    color: '#2b9348',
  },
  cardStatusPending: {
    color: '#9a031e',
  },
  crossedText: {
    textDecorationLine: 'line-through',
  },
});

export default styles;
