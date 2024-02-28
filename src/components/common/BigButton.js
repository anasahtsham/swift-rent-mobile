import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BigButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "60%",
    paddingVertical: 2,
    backgroundColor: "#e5e5e5",
    borderRadius: 100,
    borderColor: "#cdcdcd",
    borderWidth: 1.5,
  },
  buttonText: {
    fontFamily: "OpenSansRegular",
    color: "#06283d",
    textAlign: "center",
    fontSize: 25,
  },
});

export default BigButton;
