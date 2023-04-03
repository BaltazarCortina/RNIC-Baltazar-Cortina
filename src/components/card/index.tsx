import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Task} from '../../types';
import styles from './styles';

interface Props {
  task: Task;
  handlePress: (id: number) => void;
}

function Card({task, handlePress}: Props) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#c2c2c2"
      onPress={() => handlePress(task.id)}>
      <View style={styles.cardContainer}>
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
          {task.status ? 'Realizado' : 'No realizado'}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default Card;
