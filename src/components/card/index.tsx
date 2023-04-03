import React from 'react';
import {Text, View} from 'react-native';
import {Task} from '../../types';
import styles from './styles';

interface Props {
  task: Task;
  handlePress: (id: number) => void;
}

function Card({task, handlePress}: Props) {
  return (
    <View style={styles.cardContainer} onTouchEnd={() => handlePress(task.id)}>
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
          ...(task.status ? styles.cardStatusDone : styles.cardStatusPending),
        }}>
        {task.status ? 'Done' : 'Pending'}
      </Text>
    </View>
  );
}

export default Card;
