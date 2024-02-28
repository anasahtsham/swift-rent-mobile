import { Image, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/icons/adaptive-icon.png")} />
      <Text style={styles.text}>Welcome Screen</Text>
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
  text: {
    fontFamily: "OpenSansRegular",
    fontSize: 50,
    color: "#1b66dc",
  },
});

export default WelcomeScreen;
