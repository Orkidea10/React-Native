import React from "react"
import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
import{View, Text, StyleSheet, Button,} from "react-native";


const ButtonScreen=()=>{
    let counter=0;
    return<View>
        <Text>
            Button Screen
        </Text>
        <Button
        title="Click here"
        color="purple"
        onPress={()=>console.log("Button Clicked", counter++)}
        />
        <TouchableOpacity style={stili.TouchableBtn}onPress={()=>console.log("Clicked Touchable Opacity:",counter++)}>
            <Text style={stili.btnText}>Click Touchable Element</Text>
        </TouchableOpacity>
    </View>
}
const stili=StyleSheet.create({
    TouchableBtn:{
        backgroundColor:"red",
        marginVertical:15,
        paddingVertical:20,
        borderRadius:6,
        marginHorizontal:20
    },
    btnText:{
        color:"white",
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold"

    }
})
export default ButtonScreen;