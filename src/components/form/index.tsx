import React, {useEffect, useRef, useState} from 'react';
import {Alert, Keyboard, Platform, TextInput} from 'react-native';
import {useTheme} from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  AddForm,
  CardImage,
  FormButton,
  FormButtonContainer,
  FormButtonText,
  FormButtonTouchable,
  FormField,
  FormFields,
  FormInput,
  ImageContainer,
} from './styles';
import {
  addTask,
  clearTask,
  deleteTask,
  editTask,
} from '../../redux/tasks/tasksSlice';
import CheckSvg from '../../assets/icons/check';
import TrashSvg from '../../assets/icons/trash';
import {images} from '../../constants/images';
import {useAppSelector} from '../../redux/store';
import {Routes} from '../../types/routes';
import {RootParamsList} from '../../types/navigation';

type NavigationProps = NativeStackNavigationProp<
  RootParamsList,
  Routes.EDIT_TASK | Routes.ADD_TASK
>;

function Form() {
  const isIOS = Platform.OS === 'ios';
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  const selectedTask = useAppSelector(state => state.tasks.selectedTask);

  const [title, setTitle] = useState(selectedTask?.title || '');
  const [description, setDescription] = useState(
    selectedTask?.description || '',
  );

  const descriptionInput = useRef<TextInput>(null);

  useEffect(() => {
    return () => {
      dispatch(clearTask());
    };
  }, [dispatch]);

  const handleAdd = () => {
    if (title && description) {
      if (selectedTask) {
        const task = {...selectedTask, title, description};
        dispatch(editTask({task}));
      } else {
        dispatch(addTask({title, description}));
      }
      setTitle('');
      setDescription('');
      navigation.navigate(Routes.TASK_LIST);
    }
  };

  const handleDeleteCard = () => {
    Alert.alert('Delete task?', 'Are you sure you want to delete this task?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Yes',
        onPress: () => {
          selectedTask && dispatch(deleteTask(selectedTask.id));
          navigation.navigate(Routes.TASK_LIST);
        },
      },
    ]);
  };

  const taskImage =
    selectedTask?.image && selectedTask.image in images.tasks
      ? (selectedTask.image as keyof typeof images.tasks)
      : 'noImage';

  return (
    <AddForm onTouchEnd={() => Keyboard.dismiss()}>
      <FormFields>
        <ImageContainer>
          <CardImage
            alt={selectedTask?.title}
            source={images.tasks[taskImage]}
          />
        </ImageContainer>
        <FormField>
          <FormInput
            placeholder="Title"
            placeholderTextColor={
              isIOS ? theme.colors.white : theme.colors.lightGray
            }
            value={title}
            onChangeText={setTitle}
            onTouchEnd={e => e.stopPropagation()}
            onSubmitEditing={() => descriptionInput.current?.focus()}
          />
        </FormField>
        <FormField>
          <FormInput
            ref={descriptionInput}
            placeholder="Description"
            placeholderTextColor={
              isIOS ? theme.colors.white : theme.colors.lightGray
            }
            multiline
            longInput={true}
            value={description}
            onChangeText={setDescription}
            onTouchEnd={e => e.stopPropagation()}
            onSubmitEditing={handleAdd}
          />
        </FormField>
      </FormFields>
      <FormButtonContainer>
        <FormButtonTouchable
          activeOpacity={0.6}
          underlayColor={theme.colors.highlight}
          onPress={handleAdd}>
          <FormButton>
            <CheckSvg color={theme.colors.darkGray} />
            <FormButtonText>{selectedTask ? 'SAVE' : 'ADD'}</FormButtonText>
          </FormButton>
        </FormButtonTouchable>
        {selectedTask && (
          <FormButtonTouchable
            activeOpacity={0.6}
            underlayColor={theme.colors.highlight}
            onPress={handleDeleteCard}>
            <FormButton type="delete">
              <TrashSvg color={theme.colors.darkGray} />
              <FormButtonText>DELETE</FormButtonText>
            </FormButton>
          </FormButtonTouchable>
        )}
      </FormButtonContainer>
    </AddForm>
  );
}

export default Form;
