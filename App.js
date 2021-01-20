import React from "react";
import HomeScreenA from "./src/screens/HomeScreenA";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    //  <HomeScreen />
    // <WelcomeScreen/>
    // <LoginScreen/>
    // <RegisterScreen/>
    // <HomeScreen/>
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

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
