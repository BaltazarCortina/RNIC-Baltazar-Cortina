/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Card from './src/components/card';

const mockTasks = [
  {
    id: 0,
    title: 'This is a task',
    description: 'This is the description',
    status: false,
  },
  {
    id: 1,
    title: 'This is another task',
    description:
      'This is a very long description that is going to need more than two lines. This is to test if the number of lines is working correctly',
    status: false,
  },
  {
    id: 2,
    title: 'This is a task with a very long title, it should take two lines',
    description: 'This is the description',
    status: false,
  },
  {
    id: 3,
    title: 'This is a completed task',
    description: 'This is the description',
    status: true,
  },
];

const EmptyListMessage = () => (
  <View style={styles.emptyListMessageContainer}>
    <Text style={styles.emptyListMessageText}>
      There are no tasks yet, add one!
    </Text>
  </View>
);

const ListHeader = () => (
  <View style={styles.listHeaderContainer}>
    <Text style={styles.listHeaderText}>Tasks List</Text>
  </View>
);

function App(): JSX.Element {
  const [tasksList, setTasksList] = useState(mockTasks);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const descriptionInput = useRef<TextInput>(null);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        setTasksList(mockTasks);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handlePressCard = (id: number) => {
    const newList = tasksList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          status: !task.status,
        };
      }
      return task;
    });
    setTasksList(newList);
  };

  const handleDeleteCard = (id: number) => {
    const newList = tasksList.filter(task => task.id !== id);
    setTasksList(newList);
  };

  const handleAddTask = () => {
    if (title && description) {
      const newTask = {
        id: tasksList.length,
        title,
        description,
        status: false,
      };
      setTasksList([...tasksList, newTask]);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.mainContainer}>
        <FlatList
          data={tasksList}
          renderItem={({item}) => (
            <Card
              task={item}
              handlePress={handlePressCard}
              handleDelete={handleDeleteCard}
            />
          )}
          style={styles.list}
          ListEmptyComponent={EmptyListMessage}
          ListHeaderComponent={ListHeader}
        />
        <View style={styles.form} onTouchEnd={() => Keyboard.dismiss()}>
          <Text style={styles.formTitle}>Add new task</Text>
          <View style={styles.formField}>
            <TextInput
              placeholder="Title"
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
              style={styles.formInput}
              value={description}
              onChangeText={setDescription}
              onTouchEnd={e => e.stopPropagation()}
              onSubmitEditing={handleAddTask}
            />
          </View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#c2c2c2"
            onPress={handleAddTask}>
            <Text style={styles.formButton}>ADD!</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#BFCDE0',
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  },
  mainContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  list: {},
  listHeaderContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  emptyListMessageContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  emptyListMessageText: {
    fontSize: 16,
    textAlign: 'center',
  },
  form: {
    padding: 12,
    paddingTop: 20,
    borderTopColor: '#c2c2c2',
    borderTopWidth: 1,
    backgroundColor: '#fff',
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  formField: {
    paddingVertical: 10,
  },
  formInput: {
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    borderRadius: 15,
  },
  formButton: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
