import React, { useState, useEffect } from "react";
import { 
  View, Text, FlatList, Image, TouchableOpacity, 
  StyleSheet, TextInput, Dimensions 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ favorites, setFavorites, navigation }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    fetchMovies("Batman");

    const updateNumColumns = () => {
      const screenWidth = Dimensions.get("window").width;
      setNumColumns(screenWidth > 768 ? 3 : 2);
    };

    updateNumColumns();
    Dimensions.addEventListener("change", updateNumColumns);

    return () => Dimensions.removeEventListener("change", updateNumColumns);
  }, []);

  const fetchMovies = async (query) => {
    if (!query) {
      setErrorMessage("Please enter a movie name");
      return;
    }
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=c4dddbcb&s=${query}`);
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

  const clearSearch = () => {
    setSearchQuery("");
    fetchMovies("Batman");
  };

  const toggleFavorite = async (movie) => {
    let updatedFavorites = [...favorites];
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    if (isFavorite) {
      updatedFavorites = updatedFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
      updatedFavorites.push(movie);
    }

    setFavorites(updatedFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Movie Explorer</Text>
      
     
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for a movie..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.input}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity style={styles.searchButton} onPress={() => fetchMovies(searchQuery)}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        numColumns={numColumns}
        key={numColumns}
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
              <Text style={styles.favorite}>
                {favorites.some((fav) => fav.imdbID === item.imdbID) ? "★" : "☆"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#121212" },
  homeTitle: {
    color: "#FFD700",
    fontSize: 30,
    paddingTop:7,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  clearButton: {
    padding: 10,
    marginRight: 10,
  },
  clearButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  searchButton: {
    backgroundColor: "gold",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  searchButtonText: {
    color: "black",
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
  },
  poster: {
    width: 150,
    height: 220,
    borderRadius: 8,
  },
  title: { color: "#fff", fontSize: 14, fontWeight: "bold", textAlign: "center", marginVertical: 5 },
  detailsButton: {
    backgroundColor: "#E50914",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
    width: "80%",
    alignItems: "center",
  },
  detailsButtonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  favorite: {
    fontSize: 24,
    color: "gold",
    marginTop: 10,
  },
  error: { color: "red", textAlign: "center", marginBottom: 10 },
});

export default HomeScreen;
