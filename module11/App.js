import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BoxScreen from './screens/BoxScreen';
import BoxScreenChallenge from './screens/BoxScreenChallenge';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoxScreen">
        <Stack.Screen 
          name="BoxScreen" 
          component={BoxScreen} 
        />
        <Stack.Screen 
          name="BoxScreenChallenge" 
          component={BoxScreenChallenge} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
