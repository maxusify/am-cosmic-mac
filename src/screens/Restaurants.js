import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { NativeBaseProvider, Text, View } from "native-base";

export default function Restaurants({ navigation }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <NativeBaseProvider>
      <View>
        <Text>Restauracje</Text>
      </View>
    </NativeBaseProvider>
  );
}
