import { useNavigation, useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import { View, TextInput, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_KEY = "c4dddbcb";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    fetchMovies("Batman");
    loadFavorites();
  }, []);

  // Reload favorites when screen gains focus
  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  const fetchMovies = async (query) => {
    if (!query) {
      setErrorMessage("Please enter a movie name");
      return;
    }
    try {
      const response = await fetch(`${API_URL}s=${query}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setErrorMessage("");
      } else {
        setMovies([]);
        setErrorMessage("No movies found");
      }
    } catch (error) {
      setErrorMessage("Failed to fetch movies");
    }
  };

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };

  const toggleFavorite = async (movie) => {
    let updatedFavorites = [...favorites];
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
      updatedFavorites.push(movie);
    }

    setFavorites(updatedFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowFavorites(!showFavorites)} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>{showFavorites ? "Show Movies" : "Show Favorites"}</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Search for a movie..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
      />
      <TouchableOpacity style={styles.searchButton} onPress={() => fetchMovies(searchQuery)}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <FlatList
        data={showFavorites ? favorites : movies}
        keyExtractor={(item) => item.imdbID}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.Poster }} style={styles.poster} />
            <Text style={styles.title}>{item.Title}</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigation.navigate("Details", { movie: item })}
            >
              <Text style={styles.detailsButtonText}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleFavorite(item)}>
              <Text style={styles.favorite}>{favorites.some((fav) => fav.imdbID === item.imdbID) ? "★" : "☆"}</Text>
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
    padding: 20,
    backgroundColor: "#121212",
  },
  toggleButton: {
    backgroundColor: "#1DB954",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  toggleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: "#1DB954",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  movieItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    margin: 8,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  poster: {
    width: 150,
    height: 220,
    borderRadius: 8,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  detailsButton: {
    backgroundColor: "#E50914",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
    width: "80%",
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  favorite: {
    fontSize: 24,
    color: "gold",
    marginTop: 10,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default HomeScreen;
