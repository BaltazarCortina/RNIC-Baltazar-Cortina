import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Task} from '../../types';
import {KeyboardAvoid, Wrapper} from './styles';
import List from '../list';
import Form from '../form';
import {useTheme} from 'styled-components/native';

interface Props {
  tasksList: Task[];
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
}

function MainScreen({tasksList, setTasksList}: Props) {
  const isIOS = Platform.OS === 'ios';
  const theme = useTheme();

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
        backgroundColor={theme.colors.white}
        barStyle={isIOS ? 'light-content' : 'dark-content'}
      />
      <Wrapper>
        <KeyboardAvoid behavior={isIOS ? 'padding' : undefined}>
          <List
            tasksList={tasksList}
            handlePressCard={handlePressCard}
            handleDeleteCard={handleDeleteCard}
          />
          <Form handleAddTask={handleAddTask} />
        </KeyboardAvoid>
      </Wrapper>
    </>
  );
}

export default MainScreen;
