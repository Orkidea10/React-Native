import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true); // Ensure AsyncStorage is done loading

  useEffect(() => {
    checkFavorite();
  }, []);

  // Check if movie is in favorites
  const checkFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

      // Check if the movie is already a favorite
      const alreadyFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

      setIsFavorite(alreadyFavorite);
    } catch (error) {
      console.error("Error checking favorites:", error);
    } finally {
      setLoading(false); // Ensure button only loads after checking
    }
  };

  // Toggle favorite status
  const toggleFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

      if (isFavorite) {
        favorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
        Alert.alert("Removed", `${movie.Title} has been removed from favorites.`);
      } else {
        favorites.push(movie);
        Alert.alert("Added", `${movie.Title} has been added to favorites.`);
      }

      await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(!isFavorite); // Update button state
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.detailPoster} />
      <Text style={styles.detailTitle}>{movie.Title}</Text>
      <Text style={styles.detailText}>Year: {movie.Year}</Text>

      {/* Wait until AsyncStorage is loaded before showing button */}
      {!loading && (
        <TouchableOpacity
          style={[styles.button, isFavorite ? styles.removeButton : styles.addButton]}
          onPress={toggleFavorite}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Text>
        </TouchableOpacity>
      )}
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
    height: 350,
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
