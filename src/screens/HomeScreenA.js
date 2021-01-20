import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/ampersand.png")} />
      <View style={styles.info}>
          <Text style={styles.contactInfo}>AMPERSAND</Text>
          <Text style={styles.contactInfo} >CONTACTS</Text>
         
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("WelcomeScreen")}>
      <View style={styles.start}>
          <Text>GET STARTED</Text>
          <Text style={styles.started}></Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"lightgrey",
        flex:1,
        justifyContent:"space-around"
    },
  image: {
    marginHorizontal: 30,
    alignSelf:"center",
    width:250,
    height:70
  },
  info:{
      flexDirection:"column",
      alignSelf:"center",
      
  },
  contactInfo:{
      fontSize:30
  },
  start:{
      flexDirection:"column",
      alignSelf:"center",
  },
  started:{
      height:2,
      width:90,
      backgroundColor:"red",
      fontWeight:"bold"
  }
});
