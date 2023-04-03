/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Card from './src/components/card';

const mockCards = [
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
  <View style={emptyListMessageStyle.container}>
    <Text style={emptyListMessageStyle.text}>
      Todavía no hay tareas. Agregá una!
    </Text>
  </View>
);

const emptyListMessageStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

const ListHeader = () => (
  <View style={listHeaderStyle.container}>
    <Text style={listHeaderStyle.text}>Listado de tareas</Text>
  </View>
);

const listHeaderStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
    flexGrow: 1,
  };

  const [tasksList, setTasksList] = useState(mockCards);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
    <SafeAreaView style={backgroundStyle}>
      <FlatList
        data={tasksList}
        renderItem={({item}) => (
          <Card task={item} handlePress={handlePressCard} />
        )}
        style={styles.list}
        ListEmptyComponent={EmptyListMessage}
        ListHeaderComponent={ListHeader}
      />
      <View style={styles.form}>
        <Text style={styles.formTitle}>Agregar nueva tarea</Text>
        <View style={styles.formField}>
          <Text>Titulo</Text>
          <TextInput
            style={styles.formInput}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.formField}>
          <Text>Descripción</Text>
          <TextInput
            style={styles.formInput}
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#c2c2c2"
          onPress={handleAddTask}>
          <Text style={styles.formButton}>Agregar!</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
  form: {
    margin: 12,
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
    borderWidth: 1,
  },
  formButton: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
