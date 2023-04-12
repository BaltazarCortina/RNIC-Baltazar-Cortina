import React from 'react';
import {FlatList} from 'react-native';
import {Task} from '../../types';
import {
  EmptyListMessageContainer,
  EmptyListMessageText,
  ListHeaderMessageContainer,
  ListHeaderMessageText,
} from './styles';
import Card from '../card';

const EmptyListMessage = () => (
  <EmptyListMessageContainer>
    <EmptyListMessageText>
      There are no tasks yet, add one!
    </EmptyListMessageText>
  </EmptyListMessageContainer>
);

const ListHeader = () => (
  <ListHeaderMessageContainer>
    <ListHeaderMessageText>Tasks List</ListHeaderMessageText>
  </ListHeaderMessageContainer>
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
