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

  const taskImage =
    task.image && task.image in images.tasks
      ? (task.image as keyof typeof images.tasks)
      : undefined;

  return (
    <CardContainer>
      <CardComponent
        activeOpacity={0.6}
        underlayColor={isIOS ? theme.colors.lightGray : theme.colors.white}
        onPress={() => handlePress(task.id)}
        onLongPress={() => handleDeleteCard()}>
        <CardLayout>
          {taskImage && (
            <ImageContainer>
              <CardImage
                alt={task.title}
                // source={require('reactNativeCourse/src/assets/images/shopping.jpg')}
                // source={require('../../assets/images/shopping.jpg')}
                source={images.tasks[taskImage]}
                onError={() => {
                  console.log('error');
                }}
              />
            </ImageContainer>
          )}
          <TextContainer>
            <CardTitle status={task.status} numberOfLines={1}>
              {task.title}
            </CardTitle>
            <CardDescription status={task.status} numberOfLines={2}>
              {task.description}
            </CardDescription>
            <CardStatus status={task.status}>
              {task.status ? 'Done' : 'Pending'}
            </CardStatus>
          </TextContainer>
        </CardLayout>
      </CardComponent>
    </CardContainer>
  );
}

export default Card;
