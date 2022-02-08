import { StyleSheet } from "react-native";
import React, { useState } from "react";

// ====== AUTH ======
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

// ====== NATIVE BASE ======
import {
  Text,
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  NativeBaseProvider,
} from "native-base";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Rejestracja
  const handleRegister = () => {
    if (password === repeatPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("[AUTH] Zarejestrowano: " + user.email);
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Wprowadzone hasła różnią się od siebie.");
    }
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
              Rejestracja
            </Heading>

            {/* Podtytuł */}
            <Heading mt="1" color="white" fontWeight="medium" size="xs">
              Załóż nowe konto w aplikacji CosmicMac.
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

              <FormControl>
                <FormControl.Label>
                  <Text color="white">Powtórz Hasło</Text>
                </FormControl.Label>
                <Input
                  type="password"
                  value={repeatPassword}
                  onChangeText={setRepeatPassword}
                  bgColor="muted.300"
                />
              </FormControl>

              <Button mt="6" colorScheme="indigo" onPress={handleRegister}>
                Załóż konto
              </Button>

              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="white">
                  Masz już konto?{" "}
                </Text>
                <Text
                  color="secondary.700"
                  fontWeight="extrabold"
                  fontSize="sm"
                  onPress={() => navigation.push("Login")}
                >
                  Logowanie
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
