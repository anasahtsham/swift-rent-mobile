import { Button, Pressable, Text, View } from "react-native";
import { useColors } from "../../helpers/SetColors";
import ThemeSetter from "./buttons/ThemeSetter";

const SettingScreen = ({ navigation }) => {
  const colors = useColors();
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text>Change Theme</Text>
        <ThemeSetter />
      </Pressable>
      <Button
        title="Go Back"
        titleStyle={{ color: colors.textSecondary }}
        buttonStyle={[
          styles.button,
          { backgroundColor: colors.backgroundSecondary },
        ]}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
};

export default SettingScreen;
