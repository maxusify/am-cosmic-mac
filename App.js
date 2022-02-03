import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* ====== AUTH SCREENS ====== */}
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={Register} />

        {/* ====== HOME SCREEN ====== */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        {/* ====== RESTAURANT SCREENS ====== */}
        <Stack.Screen name="RestaurantsScreen" component={RestaurantList} />
        <Stack.Screen name="RestaurantMapScreen" component={RestaurantList} />
        <Stack.Screen name="FoodCategoriesScreen" component={FoodCategories} />
        <Stack.Screen name="CartScreen" component={RestaurantList} />
        <Stack.Screen name="Profile Screen" component={RestaurantList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
