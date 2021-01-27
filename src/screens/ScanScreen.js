import React from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    navigation.navigate("MemberScreen");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

     
      <View style={styles.cameraIcons}>
        <Entypo name="flash" size={24} color="white" />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MemberScreen");
          }}
        >
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.cameraText}>Place QR Code Within Frame</Text>
      <View style={styles.footer}>
        <Text style={styles.Text2}>Want to share your contact?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MemberScreen");
          }}
          style={styles.scanner}
        >
          <Text style={{ color: "red" }}>Send QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
    color:"black",
    justifyContent: "space-between",
  },

  cameraIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },

  cameraText: {
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
   
  },

  Text2: {
    marginHorizontal: 20,
    color: "black",
  },

  footer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    height: 50,
    justifyContent: "space-around",
  },

 
  scanner: {
    backgroundColor: "white",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
  },
});
