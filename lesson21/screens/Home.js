import React from "react";
import {View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
const Home =()=>{
    return(
        <View>
            <Icon name="home" size={50} color="#4F8EF7"/>
            <Icon name="laptop" size={50} color="#4F8EF7"/>
            <Icon name="search" size={50} color="#4F8EF7"/>
            <Icon name="notifications" size={50} color="#4F8EF7"/>
            <Icon name="check-circle" size={50} color="#4F8EF7"/>
        </View>
    )
}
export default Home;