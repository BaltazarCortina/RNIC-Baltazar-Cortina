import React, {useRef, useState} from 'react';
import {
  Keyboard,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from './styles';
import CheckSvg from '../../assets/icons/check';

interface Props {
  handleAddTask: (title: string, description: string) => void;
}

function Form({handleAddTask}: Props) {
  const isIOS = Platform.OS === 'ios';

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const descriptionInput = useRef<TextInput>(null);

  const handleAdd = () => {
    handleAddTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.form} onTouchEnd={() => Keyboard.dismiss()}>
      <Text style={styles.formTitle}>Add new task</Text>
      <View style={styles.formField}>
        <TextInput
          placeholder="Title"
          placeholderTextColor={isIOS ? '#F5F5F5' : '#333333'}
          style={styles.formInput}
          value={title}
          onChangeText={setTitle}
          onTouchEnd={e => e.stopPropagation()}
          onSubmitEditing={() => descriptionInput.current?.focus()}
        />
      </View>
      <View style={styles.formField}>
        <TextInput
          ref={descriptionInput}
          placeholder="Description"
          placeholderTextColor={isIOS ? '#F5F5F5' : '#333333'}
          style={styles.formInput}
          value={description}
          onChangeText={setDescription}
          onTouchEnd={e => e.stopPropagation()}
          onSubmitEditing={handleAdd}
        />
      </View>
      <View style={styles.formButtonContainer}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#c2c2c2"
          onPress={handleAdd}
          style={styles.formButtonTouchable}>
          <View style={styles.formButton}>
            <CheckSvg color={'#212121'} />
            <Text style={styles.formButtonText}>ADD</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Form;
