import { Dimensions, Image, StyleSheet } from "react-native";

const SwiftRentLogoLarge = () => {
  return (
    <Image
      style={styles.SwiftRentLogoLarge}
      source={require("../../../assets/icons/favicons/adaptive-icon.png")}
    />
  );
};

const styles = StyleSheet.create({
  SwiftRentLogoLarge: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    resizeMode: "contain",
  },
});

export default SwiftRentLogoLarge;
