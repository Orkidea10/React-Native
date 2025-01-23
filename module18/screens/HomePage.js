/*import React from "react";
import {View, Text} from 'react-native';
const HomePage=()=>{
    return <View>
        <Text>Home page</Text>
    </View>
}
export default HomePage;*/


import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Button } from "react-native-web";

const HomePage=({navigation})=>{
    return <View style={styles.container}>
        <Text>Home page</Text>
        <Button title="Go to about screen" onPress={()=> navigation.navigate('About')}></Button>
        <Text>Drawer Navigation Button Functionality</Text>
        <Button title="Open Drawer" onPress={()=> navigation.openDrawer()}/>

    </View>
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',

    },
});


export default HomePage;