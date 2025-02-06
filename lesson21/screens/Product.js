import React from "react";
import { View,Text, FlatList, Image, Stylesheet } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialIcons";

const Products=({item})=>{
    return(<View>
        <Image source={{uri: item.image}}/>
        <View>
            <Text>{item.title}</Text>
            <Text>{item.price} $</Text>
        </View>
    </View>)
}
export default Products;