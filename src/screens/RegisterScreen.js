import React, { Component } from "react";
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
import { AntDesign } from "@expo/vector-icons";
export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      Email: "",
      phonenumber: "",
      role: "",
      twitter: "",
      linkedin: "",
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <View style={styles.loginTextContainer}>
               {/* <Text style={styles.loginText}>Log in</Text> */}
        {/* </View> */}
        {/* <View style={styles.header}>
          <AntDesign
            name="arrowleft"
            size={34}
            color="white"
            style={styles.logo1}
          />
          <Text style={styles.logo2}>REGISTER</Text>
        </View> */}
        <Image style={styles.image} source={require("../../assets/chair2.jpg")} />
        {/* <View>
        
<TextInput style={styles.input}
        placeholderTextColor="black"
         placeholder="fullname"
         value={this.state.fullname}
         onChangeText={(fullname) => {
             this.setState({ fullname });
         }}
         
         /> 
         
         <TextInput style={styles.input}
        placeholderTextColor="black"
         placeholder="email"
         value={this.state.email}
         onChangeText={(email) => {
             this.setState({ email });
         }}
         
         />

<TextInput style={styles.input}
        placeholderTextColor="black"
         placeholder="phonenumber"
         value={this.state.phonenumber}
         onChangeText={(phonenumber) => {
             this.setState({ phonenumber });
         }}
         
         />

         <TextInput style={styles.input}
         placeholderTextColor="black"
        
         placeholder="role"
         value={this.state.role}
     onChangeText={(role) =>{ 
       this.setState({role})
       
     }} /> 

<TextInput style={styles.input}
         placeholderTextColor="black"
         placeholder=" twitter"
         value={this.state.twiter}
     onChangeText={(twitter) =>{ 
       this.setState({twitter})
       
     }} />

<TextInput style={styles.input}
         placeholderTextColor="black"
         placeholder="linkedin"
         value={this.state.linkedin}
     onChangeText={(linkedin) =>{ 
       this.setState({linkedin})
       
     }} />



        
          </View>  */}
        <View style={styles.registration}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            placeholder="fullname"
            value={this.state.fullname}
            onChangeText={(fullname) => {
              this.setState({ fullname });
            }}
          />
        </View>

        <View style={styles.registration}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            placeholder="email"
            value={this.state.email}
            onChangeText={(email) => {
              this.setState({ email});
            }}
          />
        </View>

        <View style={styles.registration}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            placeholder="Phone Number"
            value={this.state.PhoneNumber}
            onChangeText={(PhoneNumber) => {
              this.setState({ PhoneNumber});
            }}
          />

        </View>

        <View style={styles.registration}>
          <Text style={styles.label}>Role</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            placeholder="Role"
            value={this.state.Role}
            onChangeText={(Role) => {
              this.setState({ Role});
            }}
          />

        </View>

        <View style={styles.registration}>
          <Text style={styles.label}>Twitter</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            placeholder=" twitter"
            value={this.state. twitter}
            onChangeText={( twitter) => {
              this.setState({  twitter});
            }}
          />

        </View>

        <View style={styles.registration}>
          <Text style={styles.label}>linkedin</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            placeholder="linkedin"
            value={this.state.linkedin}
            onChangeText={(linkedin) => {
              this.setState({ linkedin});
            }}
          />

        </View>
            
            
            
            
            

        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.noAccountContainer} >
          <Text style={styles.noAccountText}>Dont have an account?</Text>
          <Text style={styles.signupText}>Sign up</Text>
          </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#f5426f",
  },

  logo1: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
  logo2: {
    marginHorizontal: 70,
    fontSize: 20,
    color: "white",
    marginVertical: 50,
    alignSelf: "center",
  },

  image: {
    height: 200,
    width: "100%",
    flex: 0.5,
  },

  registration: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    alignItems: "center",
    borderBottomColor: "lightgrey",
    marginHorizontal:10,
    marginVertical:5,
  },

  label: {
    fontSize: 20,
    // color:"grey"
  },


  input: {
    fontSize: 20,
    height: 50,
    marginLeft: 10,
    color: "lightgrey",
  },

  buttonContainer: {
    height: 50,
    width: 330,
    backgroundColor: "#f5426f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    alignSelf: "center",
    marginBottom:25
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
   
  },
});
