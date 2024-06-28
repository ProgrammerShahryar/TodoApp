import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Keyboard } from 'react-native';
import styles from './styles';

export default function Form({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskComplete, setTaskComplete] = useState(false);
  const [errorMes, setErrorMes] = useState(null);

  const addButton = () => {
    if (taskTitle.trim()) {
      onAddTask(taskTitle, taskComplete);

      setErrorMes(null);


      setTaskTitle('');


      setTaskComplete(false);





      Keyboard.dismiss();
    } else {


      setErrorMes('The description is required.');
    }
  };

  const changeTitle = (value) => {

    setTaskTitle(value);
  };

  const changeStatus = (value) => {
    setTaskComplete(value);


    
  };

  return (
    <View style={styles.container}>
      {errorMes && (
        <View style={styles.errorMessageContainer}>


          <Text style={styles.errorMessageLabel}>Alert:</Text>

          <Text style={styles.errorMessageText}>{errorMes}</Text>
        </View>
      )}

      <TextInput
        placeholder="Enter task title"
        maxLength={150}

        onChangeText={changeTitle}
        value={taskTitle}

        style={styles.textbox}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Completed:</Text>



        <Switch
          value={taskComplete}

          onValueChange={changeStatus}
        />
      </View>

      <Button
        title="Add"


        onPress={addButton}
        color="#4CAF50"
      />
    </View>
  );
}
