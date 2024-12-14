import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


const BoxScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: "stretch" }}>

        <TouchableOpacity
          style={styles.navigateBtn}
          onPress={() => navigation.navigate('BoxScreenChallenge')}
        >
          <Text style={styles.navigatetxt}>Box Screen Challenge</Text>
        </TouchableOpacity>

        <View style={{width:50, height:50,backgroundColor:"green"}}></View>
        <View style={{ height:50,backgroundColor:"skyblue"}}></View>
        <View style={{ height:50,backgroundColor:"red"}}></View>
        </View>
     );
}
const styles=StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black'
    },
    textStyle:{
        borderWidth:1,
        borderColor:"red",
        margin:20
    },
    navigateBtn:{
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        width: 150,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      navigatetxt : {
        color: 'white',
        fontSize:18,
        fontWeight:'bold'
      },
});
export default BoxScreen;