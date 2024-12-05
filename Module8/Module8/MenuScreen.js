import React from "react";
import { Text, View, Stylesheet, ImageBackground } from "react-native";
import { Button,TouchableOpacity } from "react-native";

const StudentScreen = (props) =>{
    console.log(props)
    return(
        <View>
            <Text style={style.text}>Welcome to menu screen</Text>
            <Button title='Go to  menu screen' onPress={()=>props.navigation.navigate('Menu')}/>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => props.navigation.navigate('Students')}>
                    <Text style={styles.btnText}>Go to Students Screen</Text>
                
                </TouchableOpacity>
        </View>
    );
}
const styles =Stylesheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
    btn:{
        backgroundColor: '#3446eb',
        marginVertical: 10,
        paddingVertical: 7
    },
    btnText:{
        textAlign: 'center',
        fontSize: 10,
        marginVertical: 10
    }
});
export default MenuScreen;