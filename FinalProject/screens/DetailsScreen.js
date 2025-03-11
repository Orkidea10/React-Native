import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const POSTER_URL = `https://m.media-amazon.com/images/M/`; // Using a valid image URL base

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavorite();
  }, []);

  const checkFavorite = async () => {
    try {
      const favorites = JSON.parse(await AsyncStorage.getItem("favorites")) || [];
      setIsFavorite(favorites.some((fav) => fav.imdbID === movie.imdbID));
    } catch (error) {
      console.error("Error checking favorites:", error);
    }
  };

  const toggleFavorite = async () => {
    try {
      let favorites = JSON.parse(await AsyncStorage.getItem("favorites")) || [];
      if (isFavorite) {
        favorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
      } else {
        favorites.push(movie);
      }
      await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.detailPoster} />
      <Text style={styles.detailTitle}>{movie.Title}</Text>
      <Text style={styles.detailText}>Year: {movie.Year}</Text>
      <TouchableOpacity style={[styles.button, isFavorite ? styles.removeButton : styles.addButton]} onPress={toggleFavorite}>
        <Text style={styles.buttonText}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
    alignItems: "center",
  },
  detailPoster: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#1DB954",
  },
  removeButton: {
    backgroundColor: "#E50914",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetailsScreen;
