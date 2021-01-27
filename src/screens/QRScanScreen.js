import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Label,
} from "react-native";
import { QRCode } from "react-native-custom-qr-codes-expo";

export default function QRScanScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textInfo}>
        <Text style={styles.text1}>Exchange Contact Information</Text>
        <Text style={styles.text2}>
          Scan this QR below to share your contacts
        </Text>
      </View>
      <View style={styles.scanQR}>
        <QRCode content="https://reactnative.com" size={250} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/me.jpg")}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>IRENE NTUNGWE</Text>
          <Text style={styles.position}>DIGITAL MARKETER</Text>
        </View>
      </View>
      <View style={styles.line}>
               </View>  
                
              <View style={styles.qrborder} >
                  <Text>Want to add a new connection ?</Text>
                  <View>
                      <TouchableOpacity style={styles.qrborder } onPress={()=>navigation.navigate("ScanScreen")} >
                      <Text style={styles.qrscantext}>Scan QR</Text>
                      </TouchableOpacity>
                  </View>
                  </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },

  textInfo: {
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "100",
    marginBottom: 10,
  },
  text2: {
    fontSize: 15,
    color: "grey",
  },
  imageContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
    // justifyContent: "space-around",
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 40,
  },

  scanQR: {
    alignItems: "center",
  },

  profileInfo: {
    marginVertical: 10,
  },

  name: {
    fontSize: 15,
    fontWeight: "bold",
    
    marginLeft:15
  },

  position: {
    fontSize: 13,
    color: "grey",
    marginLeft:15
  },

  line:{
      height:1,
      backgroundColor:"grey"
  }, 

  qrborder:{
flexDirection:"row",
justifyContent:"space-evenly",

      
  },
  qrscantext:{
    color:"red",
    borderStyle: "solid",
    borderRadius: 2,
    borderColor:"red",
    paddingHorizontal: 10,
         paddingVertical: 4,
        borderWidth: 1,
    
       
      
       
    
  }

});
