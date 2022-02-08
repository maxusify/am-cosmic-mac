import React from "react";
import { auth } from "../../firebase";
import { signOut, UserInfo } from "firebase/auth";
import { ScrollView, Image, StyleSheet } from "react-native";
import { NativeBaseProvider, Card, Center, Text, View } from "native-base";
import { userProfileAvatar } from "../constants/images";

const userData = require("../../mock/user_info.json");

const styles = StyleSheet.create({
  avatar: {
    width: 200,
    height: 170,
  },
});

export default function Profile({ navigation, props }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const Header = ({ props }) => {
    return (
      <View>
        <View>
          <Center>
            <Image source={userProfileAvatar} style={styles.avatar} />
            <View mt="5">
              <Text textAlign="center" fontWeight="bold" fontSize="lg">
                {userData.user.name}
              </Text>
              <Text textAlign="center" color="lightBlue.500">
                {userData.user.email}
              </Text>
              <Text textAlign="center" color="lightBlue.800">
                {userData.user.address}
              </Text>
              <Text
                mt="5"
                textAlign="center"
                color="lightBlue.800"
                onPress={handleLogout}
              >
                Wyloguj się
              </Text>
            </View>
          </Center>
        </View>
      </View>
    );
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <View>
          <Card>
            <Header />
          </Card>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
