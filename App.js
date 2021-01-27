import React from "react";
import HomeScreenA from "./src/screens/HomeScreenA";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import QRScanScreen from "./src/screens/QRScanScreen";
import ScanScreen from "./src/screens/ScanScreen";
import MemberScreen from "./src/screens/MemberScreen";
import ProfileScreen from  "./src/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreenA">
        <Stack.Screen
          options={{
            title: "REGISTER",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            title: "SIGN IN",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="HomeScreenA"
          component={HomeScreenA}
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="WelcomeScreen"
          component={WelcomeScreen}
        />

<Stack.Screen
          options={{
            title: "AMPERSAND",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="QRScanScreen"
          component={QRScanScreen}
        />

<Stack.Screen
          options={{
            header: () => null,
          }}
          name="ScanScreen"
          component={ScanScreen}
        />

<Stack.Screen
          options={{
            title: "MEMBER PROFILE",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="MemberScreen"
          component={MemberScreen}
        />


<Stack.Screen
          options={{
            title: "My PROFILE",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
