import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Task} from '../../types';
import styles from './styles';
import Card from '../card';

const EmptyListMessage = () => (
  <View style={styles.emptyListMessageContainer}>
    <Text style={styles.emptyListMessageText}>
      There are no tasks yet, add one!
    </Text>
  </View>
);

const ListHeader = () => (
  <View style={styles.listHeaderContainer}>
    <Text style={styles.listHeaderText}>Tasks List</Text>
  </View>
);

interface Props {
  tasksList: Task[];
  handlePressCard: (id: number) => void;
  handleDeleteCard: (id: number) => void;
}

function List({tasksList, handlePressCard, handleDeleteCard}: Props) {
  return (
    <FlatList
      data={tasksList}
      renderItem={({item}) => (
        <Card
          task={item}
          handlePress={handlePressCard}
          handleDelete={handleDeleteCard}
        />
      )}
      ListEmptyComponent={EmptyListMessage}
      ListHeaderComponent={ListHeader}
    />
  );
}

export default List;
