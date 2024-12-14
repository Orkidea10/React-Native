import React from "react";
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'

const BoxScreenChallenge=({navigation})=>{
    return(<View>
        <TouchableOpacity
          style={styles.navigateBtn}
          onPress={() => navigation.navigate('BoxScreen')}
        >
          <Text style={styles.navigatetxt}>Box Screen Challenge</Text>
        </TouchableOpacity>

    <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
        <Text style={{width:50, height:50,backgroundColor:"green"}}></Text>
        <Text style={{ width:50,height:50,backgroundColor:"skyblue"}}></Text>
        <Text style={{ width:50,height:50,backgroundColor:"red"}}></Text>
        </View>
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
export default BoxScreenChallenge;