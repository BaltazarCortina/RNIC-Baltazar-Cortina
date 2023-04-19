import React from 'react';
import {Platform} from 'react-native';
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
  CardStatusIcon,
} from './styles';
import SquareSvg from '../../assets/icons/square';
import CheckSquareSvg from '../../assets/icons/checkSquare';
import {useDispatch} from 'react-redux';
import {changeTaskState, setTaskToEdit} from '../../redux/tasks/tasksSlice';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../types/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamsList} from '../../types/navigation';

interface Props {
  task: Task;
}

type NavigationProps = NativeStackNavigationProp<
  RootParamsList,
  Routes.EDIT_TASK | Routes.ADD_TASK
>;

function Card({task}: Props) {
  const isIOS = Platform.OS === 'ios';
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  const handleEditCard = () => {
    dispatch(setTaskToEdit(task.id));
    navigation.navigate(Routes.EDIT_TASK);
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
        onPress={() => handleEditCard()}>
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
            </CardHeader>
            <CardDescription status={task.status} numberOfLines={2}>
              {task.description}
            </CardDescription>
            <CardStatus>
              <CardStatusIcon
                onPress={() => dispatch(changeTaskState(task.id))}
                underlayColor={
                  isIOS ? theme.colors.lightGray : theme.colors.white
                }>
                {task.status ? (
                  <CheckSquareSvg color={iconsColor} />
                ) : (
                  <SquareSvg color={iconsColor} />
                )}
              </CardStatusIcon>
            </CardStatus>
          </TextContainer>
        </CardLayout>
      </CardComponent>
    </CardContainer>
  );
}

export default Card;
