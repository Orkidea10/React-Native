import React from "react";
import {AboutStackNavigator} from "./StackNavigator"
import BottomTabNavigator from './TabNavigator'
const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}></Drawer.Screen>
            <Drawer.Screen name="About" component={AboutStackNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;