import { StyleSheet, View } from "react-native";

const Header = () => {
  return <View style={styles.header}></View>;
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    height: 30,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default Header;
