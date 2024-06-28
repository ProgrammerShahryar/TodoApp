import React, { useState } from 'react';
import { View, Switch, Text, Pressable, Modal, Alert } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Task(props) {
  const [sShowModal, sChangeModal] = useState(false);

  const sModalChange = () => {
    sChangeModal(!sShowModal);
  };


  const sStatusChange = () => {
    props.onStatusChange(props.task.id);
  };






  const sDelete = () => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Sure',
          onPress: () => {
            props.onTaskRemoval(props.task.id);
            sChangeModal(false);
          },
        },
        {
          text: 'No',
        },
      ]
    );
  };

  return (
    <>
      <Pressable onPress={sModalChange} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
        <View style={styles.sContainer}>
          <Text style={styles.sTitle}>{props.task.title}</Text>
          <Text style={styles.sText}>Status: {props.task.changed ? 'Finished' : 'Incomplete'}</Text>
        </View>
      </Pressable>
      <Modal visible={sShowModal} transparent={true} animationType="fade">
        <View style={styles.sModalOverlay}>



          <View style={styles.sModalContent}>
            <Text style={styles.sModalTitle}>{props.task.title}</Text>
            <Pressable onPress={sStatusChange} style={styles.sModalButton}>
              <Text style={styles.sModalButtonText}>Toggle Status</Text>
              <Switch value={props.task.changed} onValueChange={sStatusChange} />



              
            </Pressable>
            <Pressable onPress={sDelete} style={styles.sModalButton}>
              <Text style={styles.sModalButtonText}>Remove</Text>
              <Ionicons name="ios-trash" size={20} color="red" />
            </Pressable>
            <Pressable onPress={sModalChange} style={styles.sModalCloseButton}>
              <Ionicons name="ios-close" size={30} color="#333" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
