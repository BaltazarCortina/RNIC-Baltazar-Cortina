import React from 'react';
import {Alert, Platform} from 'react-native';
import {useTheme} from 'styled-components/native';

import {images} from '../../constants/images';
import {Task} from '../../types';
import {
  CardComponent,
  CardContainer,
  CardDescription,
  CardImage,
  CardLayout,
  CardStatus,
  CardTitle,
  ImageContainer,
  TextContainer,
  CardHeader,
  ActionsContainer,
} from './styles';
import EditSvg from '../../assets/icons/edit';
import TrashSvg from '../../assets/icons/trash';
import SquareSvg from '../../assets/icons/square';
import CheckSquareSvg from '../../assets/icons/checkSquare';
import {useDispatch} from 'react-redux';
import {changeTaskState, deleteTask} from '../../redux/tasks/tasksSlice';

interface Props {
  task: Task;
}

function Card({task}: Props) {
  const isIOS = Platform.OS === 'ios';
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleDeleteCard = () => {
    Alert.alert('Delete task?', 'Are you sure you want to delete this task?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Yes', onPress: () => dispatch(deleteTask(task.id))},
    ]);
  };

  const handleEditCard = () => {
    Alert.alert('Coming soon!');
  };

  const taskImage =
    task.image && task.image in images.tasks
      ? (task.image as keyof typeof images.tasks)
      : undefined;

  const iconsColor = isIOS ? theme.colors.light : theme.colors.lightGray;

  return (
    <CardContainer>
      <CardComponent
        activeOpacity={0.6}
        underlayColor={isIOS ? theme.colors.lightGray : theme.colors.white}
        onPress={() => dispatch(changeTaskState(task.id))}>
        <CardLayout>
          {taskImage && (
            <ImageContainer>
              <CardImage alt={task.title} source={images.tasks[taskImage]} />
            </ImageContainer>
          )}
          <TextContainer>
            <CardHeader>
              <CardTitle status={task.status} numberOfLines={1}>
                {task.title}
              </CardTitle>
              <ActionsContainer>
                <EditSvg color={iconsColor} onPress={() => handleEditCard()} />
                <TrashSvg
                  color={theme.colors.red}
                  onPress={() => handleDeleteCard()}
                />
              </ActionsContainer>
            </CardHeader>
            <CardDescription status={task.status} numberOfLines={2}>
              {task.description}
            </CardDescription>
            <CardStatus status={task.status}>
              {task.status ? (
                <CheckSquareSvg color={iconsColor} />
              ) : (
                <SquareSvg color={iconsColor} />
              )}
            </CardStatus>
          </TextContainer>
        </CardLayout>
      </CardComponent>
    </CardContainer>
  );
}

export default Card;
