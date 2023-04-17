import React from 'react';
import {FlatList} from 'react-native';

import {
  EmptyListMessageContainer,
  EmptyListMessageText,
  ListHeaderMessageContainer,
  ListHeaderMessageText,
} from './styles';
import Card from '../card';
import {useAppSelector} from '../../redux/store';

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

const List = () => {
  const tasksList = useAppSelector(state => state.tasks.tasksList);
  return (
    <FlatList
      data={tasksList}
      renderItem={({item}) => <Card task={item} />}
      ListEmptyComponent={EmptyListMessage}
      ListHeaderComponent={ListHeader}
    />
  );
};

export default List;
