import React, {useEffect, useState} from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Image } from "react-native";


const Products =()=>{
    const [products, setProducts]= useState([])
    const fetchProducts = async () =>{
        try{
            const result = await fetch("https://fakestoreapi.com/products");
            const json = await result.json();
            console.log(json);
            setProducts(json);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    const renderProduct = ({item})=>{
        return(
        <View style={styles.productContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={{ uri: item.image}} style={styles.productImage}/>
            <Text style={styles.price}>${item.price}</Text>
        </View>
        )
    }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Products</Text>
            <FlatList
            data={products}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={renderProduct}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        backgroundColor: "#fff"
    },
    header:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom:16
    },
    productContainer:{
        padding:16,
        flexDirection: "row",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"#ccc"
    },
    productImage:{
        width:50,
        height:50,
        marginRight:15,
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
        flex:1
    },
    price:{
        fontSize:14,
        color:"blue"
    }

})
export default Products;