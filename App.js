// ====== LIBS ======
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// ====== SCREENS IMPORT ======
import {
  Login,
  Register,
  Home,
  Restaurants,
  Cart,
  Profile,
} from "./src/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const AuthStack = createStackNavigator();
const HomeStack = createBottomTabNavigator();
const ProfileStack = createDrawerNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Strona Główna",
          tabBarIcon: () => <Ionicons name="md-home" size={25} />,
        }}
      />
      <HomeStack.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          title: "Restauracje",
          tabBarIcon: () => <Ionicons name="restaurant" size={25} />,
        }}
      />
      <HomeStack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Koszyk",
          tabBarIcon: () => <Ionicons name="md-cart" size={25} />,
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={Cart}
        options={{
          title: "Profil",
          tabBarIcon: () => <Ionicons name="person" size={25} />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{ title: "Zaloguj się" }}
        />
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{ options: "Załóż nowe konto" }}
        />
        <AuthStack.Screen
          name="HomeStackScreen"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
