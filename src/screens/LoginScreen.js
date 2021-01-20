import React, { Component } from 'react';
import  {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
export default class LoginScreen extends Component { 
    constructor(props){
        super(props);
          this.state = {
            Email:"",
           Password:""
            
          };
        }

    render() {
        return (
<ScrollView style={styles.container}>
{/* <View style={styles.header}>
        <AntDesign name="arrowleft" size={34} color="white" style={styles.logo1}/>
       <Text style={styles.logo2}>Sign In</Text>
      </View> */}
     
      <Image style={styles.image} source={require("../../assets/chair1.jpg")} />
      <View>
      {/* <TextInput style={styles.input}
        placeholderTextColor="#aaaaaa"
         placeholder="email"
         value={this.state.email}
         onChangeText={(email) => {
             this.setState({ email });
         }}
         
         />

        <TextInput style={styles.input}
         placeholderTextColor="#aaaaaa"
         secureTextEntry={true}
         placeholder="password"
         value={this.state.password}
     onChangeText={(password) =>{ 
       this.setState({password})
       
     }} /> */}
       <View style={styles.registration}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            placeholder="email"
            value={this.state.email}
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />
        </View>

        <View style={styles.registration}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            secureTextEntry={true}
            placeholder="password"
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />
        </View>


      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("RegisterScreen")}>
              <Text style={styles.text2}>
                  SIGN IN
              </Text>
          </TouchableOpacity>
          <View style={styles.text3}>
         <Text style={styles.reload}>Forgot? reset Password</Text>
         <Text style={styles.line}></Text>
         </View>
     
      </View>
</ScrollView>
        )
      }
    }
    
    const styles=StyleSheet.create({
      container:{
          flex:1,
      },
      header:{
          flexDirection:"row",
          backgroundColor:"#f5426f",
          
      },
  
      logo1:{
          marginHorizontal:20,
          marginVertical:40,
  
      },
      logo2:{
          marginHorizontal:70,
          fontSize:20,
          color:"white",
          marginVertical:50,
          alignSelf:"center",
           
      },
  
      image: {
          height: 300,
          width: 359,
          flex: 0.5,
          marginBottom:50
        },

      

      button:{
        height:50,
        width:330,
        backgroundColor:"#f5426f",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:10,
        marginTop:15
        
        
       },

       text2:{
           fontSize:20,
           color:"white",
           fontWeight:"bold"
       },
       text3:{
          marginTop:15,
          marginLeft:16
       },

       reload:{
           fontSize:15,
       },
       line:{
        height: 2,
        width: 105,
        backgroundColor: "red",
        fontWeight: "bold",
        marginLeft:55
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
    })