import React from "react";
import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";
const challengeScreen=()=>{
return(
    <View style={styles.page}>
        <Text style={styles.header}>App</Text>
        <View style={styles.profile}>
        <View style={styles.avatarpic}>
            <Image
            source={{
                uri:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'

            }}
            style={styles.avatar}
/>   
        </View>
        <Text style={styles.name}>JOHN DOE</Text>
        <Text style={styles.role}>UI/UX Designer</Text>
        <Text style={styles.description}>We're passionate about creating beautiful desining for startups & leading brands</Text>
        <Button style={styles.hireBtn}
        title="Hire him"
        color="yellow"
        onPress={()=>console.log("Button Clicked", counter++)}
        />
        <TouchableOpacity style={StyleSheet.hireButton}onPress={()=>console.log("Clicked Touchable Opacity:",counter++)}>
            <Text style={StyleSheet.btnText}>Hire him</Text>
            </TouchableOpacity>
    </View>
    <View style={styles.project}>
        <Text style={styles.Title}>PROJECTS</Text>
        <TouchableOpacity onPress={() => handleButtonClick('View All')}>
            <Text style={StyleSheet.viewallBtn}>View All</Text>
        </TouchableOpacity>

    </View>
    <View>
    <Image 
    source={{
        uri:'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp'
    }}
    style={styles.projectimg1}
    />
    <Image
    source={{
        uri:'https://img.freepik.com/free-psd/travel-insurance-template-psd-with-editable-text_53876-140328.jpg'
    }}
    />
</View>

    </View>
    
);

};

const styles=StyleSheet.create({
    page:{
        flex:1,
        padding:20,
    },
    header:{
        fontSize:20,
        marginBottom:20,
    },
    profile:{
        backgroundColor: '#fff'
    }


})
export default challengeScreen;