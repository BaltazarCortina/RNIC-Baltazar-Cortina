import React from 'react';
import {Alert, Platform, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import {Task} from '../../types';
import {
  CardComponent,
  CardContainer,
  CardDescription,
  CardStatus,
  CardTitle,
} from './styles';

interface Props {
  task: Task;
  handlePress: (id: number) => void;
  handleDelete: (id: number) => void;
}

function Card({task, handlePress, handleDelete}: Props) {
  const isIOS = Platform.OS === 'ios';
  const theme = useTheme();

  const handleDeleteCard = () => {
    Alert.alert('Delete task?', 'Are you sure you want to delete this task?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Yes', onPress: () => handleDelete(task.id)},
    ]);
  };
  return (
    <CardContainer>
      <CardComponent
        activeOpacity={0.6}
        underlayColor={isIOS ? theme.colors.lightGray : theme.colors.white}
        onPress={() => handlePress(task.id)}
        onLongPress={() => handleDeleteCard()}>
        <View>
          <CardTitle status={task.status} numberOfLines={1}>
            {task.title}
          </CardTitle>
          <CardDescription status={task.status} numberOfLines={2}>
            {task.description}
          </CardDescription>
          <CardStatus status={task.status}>
            {task.status ? 'Done' : 'Pending'}
          </CardStatus>
        </View>
      </CardComponent>
    </CardContainer>
  );
}

export default Card;
