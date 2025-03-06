import React,{ useState, useEffect} from "react";
import { View,Image,Text,StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const POSTER_URL= `http://img.omdbapi.com/?apikey=YOUR_API_KEY&`;

const DetailsScreen=({route})=>{
    const { movie }=route.params;
    const[isFavorite, setIsFavorite] = useState(false);

    useEffect(()=>{
        checkFavorite();
    },[]);
    const checkFavorite=async() =>{
        const favorites =JSON.parse(await AsyncStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.some(fav =>fav.imdbID ===movie.imdbID));
        
    }
    const toggleFavorite =async ()=> {
        let favorites= JSON.parse(await AsyncStorage.getItem('favorites')) || [];
        if (isFavorite){
            favorites=favorites.filter(fav=>fav.imdbID !== movie.imdbID);

        }else{
            favorites.push(movie);

        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);

    }
    return(
        <View style={styles.container}>
            <Image source={{uri: `${POSTER_URL}i=${movie.imdbID}`}} style={styles.detailPoster}/>
            <Text style={styles.detailTitle}>{movie.Title}</Text>
            <Text style={styles.detailText}>{movie.year}</Text>
            <Button title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} onPress={toggleFavorite}/>
        </View>
    )

}
const styles =StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: '#f8f8f8',
    },
    detailPoster:{
        width: '100%',
        height:300,
        borderRadius:10,

    },
    detailTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginVertical:10,
        textAlign:'center',
    },
    detailText:{
        fontSize:16,
        textAlign:'center',
        marginBottom:20,
    },


})

export default DetailsScreen;