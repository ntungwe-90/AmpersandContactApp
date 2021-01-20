import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/chair1.jpg")} />
      <View style={styles.textInfo}>
        <Text style={styles.text}>
          KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
        </Text>
        {/* <Text style={styles.text}>AMPERSAND</Text> */}
        <Text style={styles.text2}>
          SIGN IN OR REGISTER WITH YOUR AMPERSAND EMAIL
        </Text>
      </View>

      <View style={styles.register}>
        <TouchableOpacity onPress={()=>navigation.navigate("RegisterScreen")}>
          <Text>REGISTER</Text>
          <Text style={styles.started}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>
          <Text>SIGN IN</Text>
          <Text style={styles.started}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 400,
    width: "100%",
    flex: 0.5,
  },
  textInfo: {
    justifyContent: "center",
    marginTop: 25,
    marginHorizontal: 20,
    flex: 0.15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
  text2: {
    fontSize: 10,
    color: "grey",
    marginTop: 20,
    marginBottom: 5,
  },
  register: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },

  start: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 0.5,
  },
  started: {
    height: 2,
    width: 70,
    backgroundColor: "red",
    fontWeight: "bold",
  },
});
