import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BasicSwiper from './screen/BasicSwiper';
import AdvSwiper from './screen/AdvSwiper';
export default function App() {
  return (
    <AdvSwiper/>
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
