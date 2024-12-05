import React from "react";
import { Text, View, Stylesheet } from "react-native";
import StudentDetails from "./StudentDetails";

const StudentScreen = () =>{

    return(
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails name="Orkidea" description="Orkidea Nxenes"/>
            <StudentDetails name="Elmedina" description="Elmedina Nxenes"/>
            <StudentDetails name="Alma" description="Alma Nxenes"/>
        </View>
    );
}
const styles =Stylesheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
});
export default StudentScreen;