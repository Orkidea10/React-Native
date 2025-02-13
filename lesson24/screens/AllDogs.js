import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native-web";

const allDogs=()=>{
    const {DogList, setDogList}=useState([]);

    useEffect(()=>{
        const pergjigjja=fetch("https://dog.ceo/api/breeds/list/all")
        .then((data)=>{data.json()}).then((data)=>{setDogList(data)})
    },[])

    return(
        <FlatList
        data={DogList}
        renderItem={({item})=>{
            return<View><Text>{item}</Text></View>
        }}
        />
    )
}
export default allDogs;