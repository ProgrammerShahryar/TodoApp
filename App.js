import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import styles from './src/styles/main';
import uuid from 'react-uuid';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Nav = createBottomTabNavigator();
export default function App() {

  const sAddTask = (taskTitle, taskChanged) => {

    const changedTasks = [...tasks];





    changedTasks.push(
      {
        id: uuid(),
        title: taskTitle,
        changed: taskChanged
      }


    );
    sTasks(changedTasks);
  }

  const deleteTask = (id) => {



    const changedTask = tasks.filter(

      (task) => task.id !== id


    );
    sTasks(changedTask);



  }

  const [tasks, sTasks] = useState(
    [
      {
        id: uuid(),
        title: "First",
        changed: true
      },
      {
        id: uuid(),
        title: "Second",
        changed: false
      },
      {
        id: uuid(),
        title: "Third",
        changed: false
      },
    ]
  );

  const changeTask = (id) => {
    const changedTask = tasks.map((task) => {


      if (task.id === id) {

        task.changed = !task.changed;


      }
      return task;



    });

    
    sTasks(changedTask);
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Nav.Navigator screenOptions={({ route }) => ({
          headerShown: false,



          tabBarIcon: ({ color }) => {
            let iconSharry;
            if (route.name === 'Add') {

              iconSharry = 'ios-add';

            } else if (route.name === 'List') {

              iconSharry = 'ios-list-outline';

            }
            return <Ionicons name={iconSharry} size={39} color={color} />;
          },
        })}
        >

          <Nav.Screen name='List'>
            {(props) => (
              <Tasks {...props} tasks={tasks}
                onStatusChange={changeTask}
                onTaskRemoval={deleteTask} />
            )}




          </Nav.Screen>
          <Nav.Screen name='Add'>
            {(props) => (


              <Form {...props} onAddTask={sAddTask} />



            )}
          </Nav.Screen>
        </Nav.Navigator>
      </View>
    </NavigationContainer>
  );
}