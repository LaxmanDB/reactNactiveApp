import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Seed from "../screens/Seed";
import Tsow from "../screens/Tsow";
import Profile from "../screens/Profile";
import Home from "../screens/Home";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Seed" component={Seed} />
    <Tab.Screen name="Tsow" component={Tsow} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default AppNavigator;
