import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/
const navigator = createStackNavigator(
  {
      //Main:MainScreen
      //Test: TestScreen
      //Exercise: 
      //List: ListScreen
      Menu:Menuscreen,
      Students: Studentscreen
},
{
  intialRouteName: 'Menu',
  defaultNavigatorOptions: {
    title: 'App'
  }
}
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer(navigator);