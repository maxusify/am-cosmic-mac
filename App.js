// ====== LIBS ======
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

// ====== REACT COMPONENTS ======
import { Text } from "react-native";

// ====== IKONY ======
import { Ionicons } from "@expo/vector-icons";

// ====== SCREENS IMPORT ======
import {
  Login,
  Register,
  Home,
  Restaurants,
  Cart,
  Profile,
} from "./src/screens";

const AuthStack = createStackNavigator();
const HomeStack = createBottomTabNavigator();
const UserDrawer = createDrawerNavigator();

const UserDrawerScreen = ({ navigation }) => {
  return (
    <UserDrawer.Navigator>
      <UserDrawer.Screen
        name="DrawerHome"
        component={HomeStackScreen}
        options={{
          title: "Strona Główna",
          headerTitle: "CosmicMac",
          drawerIcon: () => <Ionicons name="md-home" size={20} />,
        }}
      />
      <UserDrawer.Screen
        name="DrawerProfile"
        component={Profile}
        options={{
          title: "Twój Profil",
          drawerIcon: () => <Ionicons name="person" size={20} />,
        }}
      />
    </UserDrawer.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Strona Główna",
          headerShown: false,
          tabBarIcon: () => <Ionicons name="md-home" size={25} />,
        }}
      />
      <HomeStack.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          title: "Restauracje",
          headerShown: false,
          tabBarIcon: () => <Ionicons name="restaurant" size={25} />,
        }}
      />
      <HomeStack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Koszyk",
          headerShown: false,
          tabBarIcon: () => <Ionicons name="md-cart" size={25} />,
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
          name="UserDrawerScreen"
          component={UserDrawerScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
