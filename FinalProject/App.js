import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs({ setFavorites, favorites }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Favorites") iconName = "star-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#000" },
      })}
    >
      <Tab.Screen 
        name="Home" 
        children={(props) => (
          <HomeScreen {...props} setFavorites={setFavorites} favorites={favorites} />
        )}
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Favorites" 
        children={(props) => (
          <FavoritesScreen {...props} favorites={favorites} setFavorites={setFavorites} />
        )}
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.log("Error loading favorites:", error);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {(props) => <MyTabs {...props} setFavorites={setFavorites} favorites={favorites} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Details"
          children={(props) => (
            <DetailsScreen {...props} favorites={favorites} setFavorites={setFavorites} />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
