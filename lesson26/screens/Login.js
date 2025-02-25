import React,{useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

const Login=({navigation})=>{
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const handle= async()=>{
        try{
            const response=await fetch("https://dummyjson.com/auth/login",{
                method:"POST",
                headers:{'Content-Type':"application/json"},
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                credentials:"omit"
            })
            const data= await response.json()
            if(data?.accessToken){
                console.log("Next Page")
                navigation.navigate("Main");
            }
        }
        catch(err){

        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>FAKE LOGIN</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                autoCapitalize="none"
                onChangeText={text=>setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                value={password}
                onChangeText={text=>setPassword(text)}
            />
            <Button title="Login" onPress={handle}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:20,
        backgroundColor:"#fff"
    },
    title:{
        fontSize:24,
        marginBottom:20,
        textAlign:"center"
    },
    input:{
        borderWidth:1,
        borderColor:"#aaa",
        padding:10,
        marginVertical:10,
        borderRadius:5
    }
})
export default Login ;