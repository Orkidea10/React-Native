import React from 'react';
import ChallengeScreen from './screens/ChallengeScreen';
import DescriptionScreen from './screens/Description';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Challenge">
        <Stack.Screen name="Challenge" component={ChallengeScreen}/>
        <Stack.Screen name="Description" component={DescriptionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
