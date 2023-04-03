import React from 'react';
import {Text, View} from 'react-native';
import {Task} from '../../types';
import styles from './styles';

interface Props {
  task: Task;
}

function Card({task}: Props) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle} numberOfLines={1}>
        {task.title}
      </Text>
      <Text style={styles.cardDescription} numberOfLines={2}>
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
