import React,{useEffect,useState} from "react";
import {View, Text, FlatList, Stylesheet} from 'react-native'

const AllRecipe=()=>{
    const[recipe, setRecipe]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then((res)=>res.json()).then((data)=>{
            setRecipe(data.recipes)
        })
        .catch((error)=>{
            console.erronr('Error fetching recipes:', error)
        });
   },[])
   return(
    <FlatList
        data={recipe}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
            return( 
            <View>
                <Text>{item.name}</Text>
                <Text>{item.difficulty}</Text>
            </View>)
        }}
    
    />
   )
}

export default AllRecipe;