import React from "react";
import { View } from "react-native";
import Home from "../screens/Home";
import Interest from "../screens/Interest";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Header from "../components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import Pin from "../screens/Pin";
import Reset from "../screens/Reset";
import SetPin from "../screens/SetPin";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Pin" component={Pin} />
    <Stack.Screen name="Interest" component={Interest} />
    <Stack.Screen name="Reset" component={Reset} />
    <Stack.Screen name="setPin" component={SetPin} />
  </Stack.Navigator>
);

export default AuthNavigator;
