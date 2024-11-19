import React from "react";
import{View, Text, FlatList, StyleSheet} from "react-native";

const Profile=()=>{
    const firstName="Orkidea";
    const lastName="Selmanaj";
    let FullName=`${firstName} ${lastName}`;
    const birthday="2010-17-09";
    const hobbies=["Sports","Coding","Hiking","Gaming"];

    return(
        <View>
            {/*Personal Info */}
            <Text>Personal Info</Text>
            <Text>FullName: {FullName}</Text>
            <Text>Birthday: {birthday}</Text>
            {/*Hobbies section */}
            <Text>Hobbies</Text>
            <FlatList
            data={hobbies}
            renderItem={({item})=><Text>{item}</Text>}/>
        </View>
    )
}
export default Profile