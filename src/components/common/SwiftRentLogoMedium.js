import { Dimensions, Image, StyleSheet } from "react-native";

const SwiftRentLogoMedium = () => {
  return (
    <Image
      style={styles.SwiftRentLogoMedium}
      source={require("../../assets/icons/logos/adaptive-icon.png")}
    />
  );
};

const styles = StyleSheet.create({
  SwiftRentLogoMedium: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
    resizeMode: "contain",
  },
});

export default SwiftRentLogoMedium;
