import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTapNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import RandomDog from './screens/RandomDog';
const Tab= createBottomTapNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Screen
          name='AllDogs' component={RandomDog}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
