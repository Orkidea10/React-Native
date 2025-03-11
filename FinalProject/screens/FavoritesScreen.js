import React from "react";
import { View, Text, StyleSheet ,Image, FlatList, TouchableOpacity} from 'react-native';
import { FlatList } from "react-native-web";

const FavoritesScreen=({route,navigation}) =>{
    const {favorites} = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Favorite Movies</Text>
            <FlatList
            data={favorites}
            keyExtractor={(item) => item.imdbID}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('Details',{movie:item})}>
                <View style={styles.movieContainer}>
                    <Image source={{uri:item.Poster}} style={styles.poster}/>
                    <Text style={styles.title}>{item.title} ({item.Year})</Text>
                </View>
                </TouchableOpacity>
            )}

            />
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding:10,

    },
    header:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
        textAlign:'center',
    },
    movieContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        padding:10,
        backgroundColor:'#f0f0f0',
        borderRadius:8
    },
    poster:{
        width:50,
        height:75,
        marginRight:10
    },
    title:{
        fontSize:16,
        flexShrink:1
    },
    


})

export default FavoritesScreen;