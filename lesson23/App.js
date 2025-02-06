import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllRecipe from './screens/AllRecipe';
import Quotes from './screens/Quotes';
import Todos from './screens/Todos';

export default function App() {
  return (
    <Todos/>
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
