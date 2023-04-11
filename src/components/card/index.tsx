import React from 'react';
import {Alert, Platform, Text, TouchableHighlight, View} from 'react-native';
import {Task} from '../../types';
import styles from './styles';

interface Props {
  task: Task;
  handlePress: (id: number) => void;
  handleDelete: (id: number) => void;
}

function Card({task, handlePress, handleDelete}: Props) {
  const isIOS = Platform.OS === 'ios';

  const handleDeleteCard = () => {
    Alert.alert('Delete task?', 'Are you sure you want to delete this task?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Yes', onPress: () => handleDelete(task.id)},
    ]);
  };
  return (
    <View style={styles.cardContainer}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={isIOS ? '#262626' : '#EEEEEE'}
        onPress={() => handlePress(task.id)}
        onLongPress={() => handleDeleteCard()}
        style={styles.card}>
        <View>
          <Text
            style={{
              ...styles.cardTitle,
              ...(task.status && styles.crossedText),
            }}
            numberOfLines={1}>
            {task.title}
          </Text>
          <Text
            style={{
              ...styles.cardDescription,
              ...(task.status && styles.crossedText),
            }}
            numberOfLines={2}>
            {task.description}
          </Text>
          <Text
            style={{
              ...styles.cardStatus,
              ...(task.status
                ? styles.cardStatusDone
                : styles.cardStatusPending),
            }}>
            {task.status ? 'Done' : 'Pending'}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default Card;
