import { StyleSheet, Text, View } from "react-native";
import { useColorsOnFocus } from "../../helpers/SetColors";

const Properties = () => {
  const colors = useColorsOnFocus();
  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
    >
      <Text style={{ color: colors.textPrimary }}>Properties</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Properties;
