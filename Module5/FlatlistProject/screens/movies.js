import React from "react";
import {View, Text, FlatList,StyleSheet} from "react-native";

const Movies=()=>{
  const name= "OuterBanks"
  const premiere="2020-15-04"
  const season="4"
  const actors=["Chase Stokes","Madelyn Cline","Rudy Pankow","Madison Bailey"]

return(
    <View>
        {/*Movie info */}
        <Text>Movie info</Text>
        <Text>Movie Name: {name}</Text>
        <Text>Movie Premiere: {premiere}</Text>
        <Text>Seasons: {season}</Text>
        {/*Main actors */}
        <Text>Main actors:</Text>
        <FlatList
        data={actors}
        renderItem={({item})=><Text>{item}</Text>}/>
    </View>
)
}
export default Movies
