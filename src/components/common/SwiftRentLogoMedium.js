import { Image, StyleSheet } from "react-native";

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
    width: 150,
    height: 150,
  },
});

export default SwiftRentLogoMedium;
