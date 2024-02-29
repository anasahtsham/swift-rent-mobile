import { Image, StyleSheet } from "react-native";

const SwiftRentLogo150 = () => {
  return (
    <Image
      style={styles.swiftRentLogo150}
      source={require("../../assets/icons/logos/adaptive-icon.png")}
    />
  );
};

const styles = StyleSheet.create({
  swiftRentLogo150: {
    width: 150,
    height: 150,
  },
});

export default SwiftRentLogo150;
