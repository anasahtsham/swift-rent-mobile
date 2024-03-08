import { StyleSheet, Text, View } from "react-native";

const Properties = () => {
  return (
    <View style={styles.container}>
      <Text>Properties</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default Properties;
