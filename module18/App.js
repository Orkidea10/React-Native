import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import DrawerNavigator from '../module18/screens/DrawerNavigation';
import HomePage from './screens/HomePage';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
      <HomePage/>
    </NavigationContainer>
  );
}



/*
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import aboutpage from './screens/aboutpage';
import HomePage from './screens/HomePage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: "black" },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={aboutpage}
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="video-stabilization" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
  */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
