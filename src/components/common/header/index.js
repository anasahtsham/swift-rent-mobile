import { StyleSheet, View } from "react-native";

const Header = () => {
  return <View style={styles.header}></View>;
};

const styles = StyleSheet.create({
  header: {
    flex: 0.05,
    backgroundColor: "#fff",
    zIndex: 10,
  },
});

export default Header;
