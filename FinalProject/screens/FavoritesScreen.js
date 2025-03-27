import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesScreen = ({ favorites, setFavorites, navigation }) => {
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    const updateNumColumns = () => {
      const screenWidth = Dimensions.get("window").width;
      if (screenWidth > 768) {
        setNumColumns(3);
      } else {
        setNumColumns(2);
      }
    };

    updateNumColumns();
    const listener = Dimensions.addEventListener("change", updateNumColumns);
    return () => {
      listener.remove();
    };
  }, []);

  const handleRemoveFavorite = async (movie) => {
    const updatedFavorites = favorites.filter((item) => item.imdbID !== movie.imdbID);
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Your Favorite Movies </Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.imdbID}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.Poster }} style={styles.poster} />
            <Text style={styles.titleText}>{item.Title}</Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate("Details", { movie: item })}>
              <Text style={styles.detailsButtonText}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemoveFavorite(item)} style={styles.favoriteButton}>
              <Ionicons name="star" size={30} color="#FFD700" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 20,
  },
  title: {
    color: "#FFEB3B",
    fontSize: 28,
    paddingTop: 7,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  movieItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    margin: 8,
    borderRadius: 10,
    padding: 10,
  },
  poster: {
    width: 150,
    height: 220,
  },
  titleText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  detailsButton: {
    backgroundColor: "#E50914",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
    width: "80%",
    alignItems: "center",
  },
  detailsButtonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  favoriteButton: {
    marginTop: 10,
  },
});

export default FavoritesScreen;