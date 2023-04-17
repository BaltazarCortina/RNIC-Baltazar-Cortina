import React, {useRef, useState} from 'react';
import {Keyboard, Platform, TextInput} from 'react-native';
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
import CheckSvg from '../../assets/icons/check';
import {useTheme} from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {addTask} from '../../redux/tasks/tasksSlice';
import {mockTasks} from '../../utils/mocks/tasks';
import {images} from '../../constants/images';

function Form() {
  const isIOS = Platform.OS === 'ios';
  const theme = useTheme();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const descriptionInput = useRef<TextInput>(null);

  const handleAdd = () => {
    if (title && description) {
      dispatch(addTask({title, description}));
      setTitle('');
      setDescription('');
    }
  };

  const task = mockTasks[4];

  const taskImage =
    task?.image && task.image in images.tasks
      ? (task.image as keyof typeof images.tasks)
      : 'noImage';

  return (
    <AddForm onTouchEnd={() => Keyboard.dismiss()}>
      <FormFields>
        <ImageContainer>
          <CardImage alt={task?.title} source={images.tasks[taskImage]} />
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
            <FormButtonText>ADD</FormButtonText>
          </FormButton>
        </FormButtonTouchable>
      </FormButtonContainer>
    </AddForm>
  );
}

export default Form;
