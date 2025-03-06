import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Text, Button, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';



const API_KEY = 'c4dddbcb';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
const POSTER_URL = `http://img.omdbapi.com/?apikey=${API_KEY}&`;

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] =useState('')

  const fetchMovies = async (query) => {
    if(!query){
      setErrorMessage('Please enter a movie name')
      return
    }
    try {
      const response = await fetch(`${API_URL}s=${query}`);
      const data = await response.json();
      console.log('API Response:', data)

      if(data.Response === 'True'){
        setMovies(data.Search);
        setErrorMessage('')
      }else{
        setMovies([])
        setErrorMessage("No movies found")
      }

      
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to fetch movies')
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for a movie"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
      />
      <Button title="Search" onPress={() => fetchMovies(searchQuery)} />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item })}>
            <View style={styles.movieItem}>
              <Image source={{ uri: `${POSTER_URL}i=${item.imdbID}` }} style={styles.poster} />
              <Text style={styles.title}>{item.Title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  poster: {
    width: 50,
    height: 75,
    borderRadius: 5,
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  error:{
    color: 'red',
    marginBottom:10
  },
});

export default HomeScreen;