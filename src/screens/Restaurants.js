import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import {
  NativeBaseProvider,
  Card,
  VStack,
  Box,
  Image,
  Text,
} from "native-base";
import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native";

import { rest1 } from "../constants/images";

export default function Restaurants({ navigation }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const data = require("../../mock/restaurant_info.json");

  function renderResaurantList() {
    return (
      <Animated.ScrollView>
        <VStack mx="2">
          {data.restaurants.map((restaurant, index) => (
            <Card key={`rest-${index}`} bg="white" rounded="15" my="2">
              <Box p="0" height="150" mb="2">
                <Image
                  source={rest1}
                  alt="Restaurant"
                  resizeMode="cover"
                  style={styles.image}
                />
              </Box>
              <Box px="2">
                <Text bold fontSize="20">
                  {`${restaurant.city}, ${restaurant.address}`}
                </Text>
              </Box>
            </Card>
          ))}
        </VStack>
      </Animated.ScrollView>
    );
  }

  return <NativeBaseProvider>{renderResaurantList()}</NativeBaseProvider>;
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
