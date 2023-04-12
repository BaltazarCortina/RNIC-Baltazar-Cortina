import React, {useRef, useState} from 'react';
import {Keyboard, Platform, TextInput} from 'react-native';
import {
  AddForm,
  FormButton,
  FormButtonContainer,
  FormButtonText,
  FormButtonTouchable,
  FormField,
  FormInput,
  FormTitle,
} from './styles';
import CheckSvg from '../../assets/icons/check';
import {useTheme} from 'styled-components/native';

interface Props {
  handleAddTask: (title: string, description: string) => void;
}

function Form({handleAddTask}: Props) {
  const isIOS = Platform.OS === 'ios';
  const theme = useTheme();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const descriptionInput = useRef<TextInput>(null);

  const handleAdd = () => {
    handleAddTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <AddForm onTouchEnd={() => Keyboard.dismiss()}>
      <FormTitle>Add new task</FormTitle>
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
