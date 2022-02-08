import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import {
  NativeBaseProvider,
  Box,
  Flex,
  Text,
  VStack,
  Divider,
  View,
  Card,
} from "native-base";
import Animated from "react-native-reanimated";

const cartData = require("../../mock/cart_info.json");

export default function Cart({ navigation }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  function renderCartInfo() {
    return (
      <Animated.ScrollView>
        {cartData.cart.map((item, key) => (
          <View key={`cart-${key}`}>
            <Card bg="fuchsia.100" rounded="15" mb="5">
              <Box border="1" borderRadius="md">
                <VStack space="4" divider={<Divider />}>
                  <Box px="4" pt="4">
                    <Text bold fontSize="20" color="purple.600">
                      {item.name}
                    </Text>
                  </Box>
                  <Box px="4">
                    <Text italic>{item.desc}</Text>
                  </Box>
                  <Flex px="4" pb="4" direction="row-reverse">
                    <Text fontSize="20" bold>{`${
                      item.price * item.quantity
                    } PLN (Ilość: ${item.quantity})`}</Text>
                  </Flex>
                </VStack>
              </Box>
            </Card>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <NativeBaseProvider>
      <View p="3">{renderCartInfo()}</View>
    </NativeBaseProvider>
  );
}
