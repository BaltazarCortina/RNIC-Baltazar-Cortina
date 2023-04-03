import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    marginBottom: 0,
    paddingBottom: 10,
    borderBottomColor: '#c2c2c2',
    borderBottomWidth: 1,
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
});

export default styles;
