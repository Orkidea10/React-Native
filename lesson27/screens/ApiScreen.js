import React,{useState, useEffect}from "react";
import { View, Text,FlatList } from "react-native";

const ApiScreen=()=>{

    const [data, setData]=useState([])
    const fetchData = async()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(pergjigja=>pergjigja.json()).then(json=>{setData(json)})
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <View>
            <Text>API DATA</Text>
            <FlatList
            data={data}
            keyExtractor={item=>item.id}
            renderItem={({item})=>{
                return <Text>{item.title}</Text>
            }}
            />
        </View>
    )
}
export default ApiScreen;