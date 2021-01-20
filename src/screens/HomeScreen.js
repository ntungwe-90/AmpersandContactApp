import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeScreen() {
    return (
       <View style={styles.container}>
           <View style={styles.header}>
            {/* <Image style={styles.image} source={require("../../assets/ampersand.png")} /> */}
            <Text style={styles.image}>AMPERSAND</Text>
            </View>
       </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    header:{
        flexDirection:"row",
       
        
    },
    image:{
        marginVertical:50,
        alignSelf:"center",
        color:"white",
      
        
       
        
    },

   
})