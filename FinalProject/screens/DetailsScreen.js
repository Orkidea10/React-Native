import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailsScreen = ({ route, favorites, setFavorites }) => {
  const { movie } = route.params;

  const toggleFavorite = async () => {
    try {
      let updatedFavorites = [...favorites];
      const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

      if (isFavorite) {
        updatedFavorites = updatedFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
      } else {
        updatedFavorites.push(movie);
      }

      setFavorites(updatedFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } catch (error) {
      console.log("Error updating favorites:", error);
    }
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        
      </View>

      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.year}>{movie.Year}</Text>
      
      <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
        <Text style={styles.favoriteText}>
          {favorites.some((fav) => fav.imdbID === movie.imdbID) ? "Remove from Favorites" : "Add to Favorites"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    padding: 20, 
    backgroundColor: "#121212" 
  },
  header: {
    width: "100%",
    backgroundColor: "#000",
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: { 
    color: "#FFD700", 
    fontSize: 20, 
    fontWeight: "bold" 
  },
  poster: { 
    width: 220, 
    height: 320, 
    borderRadius: 10, 
    marginBottom: 15 
  },
  title: { 
    color: "#FFD700", 
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center",
    paddingHorizontal: 10
  },
  year: { 
    color: "#fff", 
    fontSize: 16, 
    marginBottom: 15 
  },
  favoriteButton: {
    marginTop: 20,
    backgroundColor: "#E50914",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  favoriteText: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16 
  },
});

export default DetailsScreen;
