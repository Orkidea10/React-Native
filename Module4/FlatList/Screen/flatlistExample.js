import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native"

const students=[
    {name:"Orkidea", age:14},
    {name:"Amari", age:14},
    {name:"Arianit", age:17},
    {name:"Blerti", age:17},
    {name:"Rroni", age:14}
]
const FlatListExample=()=>{
    return<View> 
        <Text style={stili.textEdit}>This is the FlatList Screen</Text>
        <FlatList
        data={students}
        renderItem={({item})=>{
            return<Text>{item.name} - {item.age}</Text>
        }}/>
    </View>
}
const stili=StyleSheet.create({
    textEdit:{
        fontSize:20,
        backgroundColor:'blue'    
    }
})
export default FlatListExample;