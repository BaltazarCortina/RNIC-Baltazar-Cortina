/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Card from './src/components/card';

const mockCards = [
  {
    id: 1,
    title: 'This is a task',
    description: 'This is the description',
    status: false,
  },
  {
    id: 2,
    title: 'This is another task',
    description:
      'This is a very long description that is going to need more than two lines. This is to test if the number of lines is working correctly',
    status: false,
  },
  {
    id: 3,
    title: 'This is a task with a very long title, it should take two lines',
    description: 'This is the description',
    status: false,
  },
  {
    id: 4,
    title: 'This is a completed task',
    description: 'This is the description',
    status: true,
  },
];

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
  };

  const [tasksList, setTasksList] = useState(mockCards);

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

  return (
    <SafeAreaView style={backgroundStyle}>
      <Card task={tasksList[0]} handlePress={handlePressCard} />
      <Card task={tasksList[1]} handlePress={handlePressCard} />
      <Card task={tasksList[2]} handlePress={handlePressCard} />
      <Card task={tasksList[3]} handlePress={handlePressCard} />
    </SafeAreaView>
  );
}

export default App;
