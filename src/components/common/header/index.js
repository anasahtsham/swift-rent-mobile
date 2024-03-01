import { StyleSheet, View } from "react-native";

const Header = () => {
  return <View style={styles.header}></View>;
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    backgroundColor: "#fff",
    zIndex: 10,
  },
});

export default Header;
