import React, {useEffect,useState} from "react";
import{View, Text, FlatList, StyleSheet} from "react-native"

const Quotes=()=>{
    const[quotes, setquotes]=useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/quotes').then((res)=>res.json()).then((data)=>{
            setquotes(data.quotes)
        })
        
   },[])
   return(
    <FlatList
        data={quotes}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
            return( 
            <View>
                <Text>{item.quote}</Text>
                <Text>{item.author}</Text>
            </View>
            )
        }}
    
    />
   )
}

export default Quotes;