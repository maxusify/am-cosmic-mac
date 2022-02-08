// ====== REACT ======
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View } from "react-native";

// ====== AUTORYZACJA ======
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

// ====== NATIVE BASE ======
import {
  Text,
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  NativeBaseProvider,
  Image,
} from "native-base";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sprawdzanie czy użytkownik jest zautoryzowany
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("HomeStackScreen");
      }
    });
    return unsubscribe;
  }, []);

  // Rejestracja
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  // Logowanie
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in with: ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const config = {
    dependencies: {
      "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
  };

  return (
    <NativeBaseProvider config={config}>
      <Box
        w="100%"
        h="100%"
        bg={{
          linearGradient: {
            colors: ["primary.600", "violet.900"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
      >
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%">
            {/* Tytuł */}
            <Heading size="lg" fontWeight="600" color="white">
              Logowanie
            </Heading>

            {/* Podtytuł */}
            <Heading mt="1" color="white" fontWeight="medium" size="xs">
              Zaloguj się aby przejść do aplikacji.
            </Heading>

            {/* Formularz logowania */}
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>
                  <Text color="white">Adres E-Mail</Text>
                </FormControl.Label>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  bgColor="muted.300"
                />
              </FormControl>

              <FormControl>
                <FormControl.Label>
                  <Text color="white">Hasło</Text>
                </FormControl.Label>
                <Input
                  type="password"
                  value={password}
                  onChangeText={setPassword}
                  bgColor="muted.300"
                />
              </FormControl>

              <Button mt="6" colorScheme="indigo" onPress={handleLogin}>
                Zaloguj się
              </Button>

              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="white">
                  Jesteś tu nowy?{" "}
                </Text>
                <Text
                  color="secondary.700"
                  fontWeight="extrabold"
                  fontSize="sm"
                  onPress={() => navigation.push("Register")}
                >
                  Rejestracja
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
