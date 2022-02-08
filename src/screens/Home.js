import React from "react";
import {
  NativeBaseProvider,
  Image,
  Text,
  View,
  Box,
  Card,
  VStack,
  HStack,
} from "native-base";
import Animated from "react-native-reanimated";
import { ImageBackground } from "react-native";
import {
  menuBurgers,
  menuFries,
  menuDrinks,
  menuWraps,
  menuDesserts,
} from "../constants/images";
import { StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <Animated.ScrollView p="4">
        <Card bgColor="lightBlue.400" mb="4" rounded="15">
          <Box>
            {/* <Box style={{ width: 180, height: 200, aspectRatio: 1 * 1.9 }}>
              <Image
                source={require("../../assets/locations/restaurant-4.jpg")}
                alt="Restauracja"
                style={{ resizeMode: "cover", width: "100%", height: "100%" }}
              />
            </Box> */}
            <Box>
              <Text
                fontSize="24"
                bold
                color="white"
                fontFamily="heading"
                textAlign="center"
              >
                Trwa promocja!
              </Text>
              <Text
                italic
                mt="4"
                color="white"
                fontSize="16"
                textAlign="justify"
              >
                We wszystkich restauracjach aż do 20% rabatu!
              </Text>
              <Text bold mt="4" color="white" fontSize="18" textAlign="center">
                Promocja potrwa do:
              </Text>
              <Text
                bold
                mt="1"
                color="warning.400"
                fontSize="20"
                textAlign="center"
              >
                25 luty 2022
              </Text>
            </Box>
          </Box>
        </Card>

        <Card bg="white" rounded="15" mb="4">
          <Box>
            {/* <Box style={{ width: 180, height: 200, aspectRatio: 1 * 1.9 }}>
              <Image
                source={require("../../assets/locations/restaurant-4.jpg")}
                alt="Restauracja"
                style={{ resizeMode: "cover", width: "100%", height: "100%" }}
              />
            </Box> */}
            <Box>
              <Text fontSize="24" bold color="purple.700" fontFamily="heading">
                Nowości
              </Text>
              <Text italic mt="4" fontSize="16" textAlign="justify">
                Już niedługo rozpocznie się sezon wiosenny! Razem z nim do
                naszych restauracji zawita nowa flota produktów. Z najgorętszych
                nowości: VenusBurger z mocno prażoną cebulką oraz CosmicSprite z
                cytryną.
              </Text>
            </Box>
          </Box>
        </Card>

        <Card bg="white" rounded="15">
          <Box>
            <Box>
              <Text
                fontSize="24"
                bold
                color="purple.700"
                fontFamily="heading"
                mb="5"
              >
                Zobacz Menu
              </Text>
              <HStack>
                <Card
                  bg="white"
                  rounded="15"
                  p="0"
                  width="1/2"
                  height="100"
                  mx="1"
                >
                  <ImageBackground
                    source={menuBurgers}
                    resizeMode="cover"
                    style={styles.image}
                  >
                    <Text textAlign="center" color="white" bold fontSize="26">
                      Burgery
                    </Text>
                  </ImageBackground>
                </Card>

                <Card
                  bg="white"
                  rounded="15"
                  p="0"
                  width="1/2"
                  height="100"
                  mx="1"
                >
                  <ImageBackground
                    source={menuFries}
                    resizeMode="cover"
                    style={styles.image}
                  >
                    <Text
                      textAlign="center"
                      color="white"
                      bold
                      fontSize="26"
                      shadow="3"
                    >
                      Frytki
                    </Text>
                  </ImageBackground>
                </Card>
              </HStack>
              <HStack mt="2">
                <Card
                  bg="white"
                  rounded="15"
                  p="0"
                  width="1/2"
                  height="100"
                  mx="1"
                >
                  <ImageBackground
                    source={menuDrinks}
                    resizeMode="cover"
                    style={styles.image}
                  >
                    <Text
                      textAlign="center"
                      color="white"
                      bold
                      fontSize="26"
                      shadow="3"
                    >
                      Napoje
                    </Text>
                  </ImageBackground>
                </Card>
                <Card
                  bg="white"
                  rounded="15"
                  p="0"
                  width="1/2"
                  height="100"
                  mx="1"
                >
                  <ImageBackground
                    source={menuDesserts}
                    resizeMode="cover"
                    style={styles.image}
                  >
                    <Text
                      textAlign="center"
                      color="white"
                      bold
                      fontSize="26"
                      shadow="3"
                    >
                      Desery
                    </Text>
                  </ImageBackground>
                </Card>
              </HStack>
              <HStack>
                <Card
                  bg="white"
                  rounded="15"
                  p="0"
                  width="1/2"
                  height="100"
                  mt="2"
                  mx="1"
                >
                  <ImageBackground
                    source={menuWraps}
                    resizeMode="cover"
                    style={styles.image}
                  >
                    <Text
                      textAlign="center"
                      color="white"
                      bold
                      fontSize="26"
                      shadow="3"
                    >
                      Wrapy
                    </Text>
                  </ImageBackground>
                </Card>
              </HStack>
            </Box>
          </Box>
        </Card>
      </Animated.ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
