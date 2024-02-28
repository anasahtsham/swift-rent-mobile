import { Image, StyleSheet } from "react-native";

const SwiftRentLogo250 = () => {
  return (
    <Image
      style={styles.swiftRentLogo250}
      source={require("../../assets/icons/logos/adaptive-icon.png")}
    />
  );
};

const styles = StyleSheet.create({
  swiftRentLogo250: {
    width: 250,
    height: 250,
  },
});

export default SwiftRentLogo250;
