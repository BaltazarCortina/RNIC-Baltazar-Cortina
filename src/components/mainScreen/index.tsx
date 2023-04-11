import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Task} from '../../types';
import styles from './styles';
import List from '../list';
import Form from '../form';

interface Props {
  tasksList: Task[];
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
}

function MainScreen({tasksList, setTasksList}: Props) {
  const isIOS = Platform.OS === 'ios';

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

export default MainScreen;
