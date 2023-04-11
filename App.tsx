/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  AppState,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Form from './src/components/form';

import List from './src/components/list';

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

function App(): JSX.Element {
  const [tasksList, setTasksList] = useState(mockTasks);

  useEffect(() => {
    RNBootSplash.hide({fade: true});
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

  const handleAddTask = (title: string, description: string) => {
    if (title && description) {
      const newTask = {
        id: tasksList.length,
        title,
        description,
        status: false,
      };
      setTasksList([...tasksList, newTask]);
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
          <List
            tasksList={tasksList}
            handlePressCard={handlePressCard}
            handleDeleteCard={handleDeleteCard}
          />
          <Form handleAddTask={handleAddTask} />
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
});

export default App;
