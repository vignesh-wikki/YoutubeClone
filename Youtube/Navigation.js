import React from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreens from "./Screens/Homescreens";
import Videoscreens from "./Screens/Videoscreens";
import Shortscreens from "./Screens/Shortscreens";
import Libraryscreens from "./Screens/Libraryscreens";
import Subscriptionscreens from "./Screens/Subscriptscreens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Searchscreens from "./Screens/Searchscreens";
import { Ionicons } from "@expo/vector-icons";

export const navigationRef = createNavigationContainerRef();

const Bottomtab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Tab() {
  return (
    <Bottomtab.Navigator
      initialRouteName="Home"
      activeColor="black"
      barStyle={{ backgroundColor: "white" }}
    >
      <Bottomtab.Screen
        name="home"
        component={Homescreens}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Bottomtab.Screen
        name="Video"
        component={Videoscreens}
        options={{
          tabBarLabel: "Videos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="video" color={color} size={26} />
          ),
        }}
      />

      <Bottomtab.Screen
        name="Shorts"
        component={Shortscreens}
        options={{
          tabBarLabel: "Shorts",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="add-circle-outline"
              color={color}
              size={30}
              style={{
                bottom: 0,
                zIndex: 50,
              }}
            />
          ),
        }}
      />

      <Bottomtab.Screen
        name="Subscription"
        component={Subscriptionscreens}
        options={{
          tabBarLabel: "Subscription",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="youtube-subscription"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Bottomtab.Screen
        name="Library"
        component={Libraryscreens}
        options={{
          tabBarLabel: "Library",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="play-box-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Bottomtab.Navigator>
  );
}

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stack"
        component={Tab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Searchscreens}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const Bottom = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stacks />
    </NavigationContainer>
  );
};

export default Bottom;
