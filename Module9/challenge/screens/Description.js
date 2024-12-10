import React from "react";
import { View, StyleSheet, Text, Image} from "react-native";

const DescriptionScreen = () => {
    return(
        <View style={stili.container}>
            <Text style={stili.text}>This is the description Screen</Text>
            <Image source={{
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJwsYgOQ7EF6eFGX7-T2t4ekX0obxSIfQ-w&s'
            }}
            style={stili.img}
            />
            <Text style={stili.description}>I'm someone who likes solving problems,and works well under pressure, always looking to grow and improve.Whether its tech, sport, leadership etc.</Text>
        </View>
    );
};

const stili = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:20,
        fontWeight:'bold',
    },
    description: {
        fontSize:16,
        textAlign:'center'
    },
    img:{
        width: 200,
        height: 200,
        borderRadius: 50,
    }
});

export default DescriptionScreen;