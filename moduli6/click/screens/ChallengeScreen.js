import React from "react"
import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
import{View, Text, StyleSheet, Button,} from "react-native";


const ChallengeScreen=()=>{
    let counter=100;
    return<View>
        <Text>
            Button Screen
        </Text>
        <Button
        title="Click here"
        onPress={()=>console.log("Button Clicked", counter--)}
        />
    </View>
}


export default ChallengeScreen;