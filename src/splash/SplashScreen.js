import { StyleSheet, View, Text, Image } from "react-native";

const SplashScreen = () => {
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
    fontFamily: "OpenSansBold",
    fontSize: 50,
    color: "#1b66dc",
  },
  splashTextRent: {
    fontFamily: "OpenSansBold",
    fontSize: 50,
    color: "#54b9f9",
  },
});

export default SplashScreen;
