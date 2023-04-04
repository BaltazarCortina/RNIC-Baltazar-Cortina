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
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Card from './src/components/card';

const isIOS = Platform.OS === 'ios';

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
    <>
      <StatusBar
        animated={true}
        backgroundColor="#EEEEEE"
        barStyle={isIOS ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView style={styles.backgroundStyle}>
        <KeyboardAvoidingView
          behavior={isIOS ? 'padding' : undefined}
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
                onSubmitEditing={handleAddTask}
              />
            </View>
            <View style={styles.formButtonContainer}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#c2c2c2"
                onPress={handleAddTask}
                style={styles.formButton}>
                <Text style={styles.formButtonText}>ADD!</Text>
              </TouchableHighlight>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: isIOS ? '#212121' : '#EEEEEE',
  },
  mainContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  list: {},
  listHeaderContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderBottomColor: '#FFC107',
    borderBottomWidth: 2,
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: isIOS ? '#EEEEEE' : '#212121',
  },
  emptyListMessageContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  emptyListMessageText: {
    fontSize: 16,
    textAlign: 'center',
    color: isIOS ? '#EEEEEE' : '#212121',
  },
  form: {
    padding: 10,
    marginTop: 5,
    borderTopColor: '#FFC107',
    borderTopWidth: 2,
    backgroundColor: isIOS ? '#333333' : '#F5F5F5',
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 10,
    color: isIOS ? '#EEEEEE' : '#212121',
  },
  formField: {
    paddingBottom: 10,
  },
  formInput: {
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: isIOS ? '#F5F5F5' : '#333333',
    borderRadius: 15,
    color: isIOS ? '#F5F5F5' : '#333333',
  },
  formButtonContainer: {
    alignItems: 'center',
  },
  formButton: {
    width: 80,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#FFC107',
  },
  formButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333333',
  },
});

export default App;
