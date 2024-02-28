import { Pressable, StyleSheet, Text, View } from "react-native";
import SwiftRentLogo250 from "../components/common/SwiftRentLogo250";
import BigButton from "../components/common/BigButton";
import LanguageSelect from "../components/common/LanguageSelect";
import * as English from "../assets/fonts/displaytext/EN/en-pack";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <SwiftRentLogo250 />
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>{English.welcomeTo}</Text>
        <Text style={styles.welcomeText}>{English.swiftRent}</Text>
      </View>
      <BigButton buttonText={English.getStarted} />
      <Pressable style={styles.loginTextContainer}>
        <Text style={styles.text}>{English.alreadyHaveAnAccount}</Text>
        <Text style={styles.loginText}>{English.login}</Text>
      </Pressable>
      <LanguageSelect />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  welcomeTextContainer: {
    flex: 0.4,
    flexDirection: "column",
  },
  welcomeText: {
    fontFamily: "OpenSansBold",
    fontSize: 40,
    color: "#47b5ff",
    textAlign: "center",
  },
  loginTextContainer: {
    flexDirection: "row",
  },
  text: { fontFamily: "OpenSansRegular" },
  loginText: {
    color: "#47b5ff",
    fontFamily: "OpenSansBold",
  },
});

export default WelcomeScreen;
