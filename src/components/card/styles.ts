import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    marginBottom: 0,
    paddingBottom: 10,
    borderColor: '#c2c2c2',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#fff',

    elevation: 5,

    shadowColor: '#c2c2c2',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: '600',
  },
  cardDescription: {
    color: '#202020',
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
