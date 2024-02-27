import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Welcome Screen"); // Navigate to Welcome Screen after 5 seconds
    }, 5000); // where 1000 milliseconds = 1 second

    // Clear the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.splashIcon} source={require("../assets/icon.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.splashTextSwift}>Swift</Text>
        <Text style={styles.splashTextRent}>Rent</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  splashIcon: {
    width: 250,
    height: 250,
  },
  textContainer: {
    flexDirection: "row",
  },
  splashTextSwift: {
    flex: 1,
    textAlign: "right",
    fontFamily: "OpenSansBold",
    fontSize: 50,
    color: "#1b66dc",
  },
  splashTextRent: {
    flex: 1,
    textAlign: "left",
    fontFamily: "OpenSansBold",
    fontSize: 50,
    color: "#54b9f9",
  },
});

export default SplashScreen;
