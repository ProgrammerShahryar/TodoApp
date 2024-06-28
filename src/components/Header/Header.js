import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

export default function TopTitle() {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>


        <FontAwesome5 name="tasks" size={24} color="#4CAF50" />
        <Text style={styles.title}>Todo App</Text>

        
      </View>
      <Text style={styles.author}>by Shahryar Salim</Text>
    </View>
  );
}
