import { Button, Pressable, Text, View } from "react-native";
import { useColors } from "../../helpers/SetColors";
import ThemeSetter from "./buttons/ThemeSetter";

const SettingScreen = ({ navigation }) => {
  const colors = useColors();
  return (
    <View style={styles.container}>
      <Pressable>
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
};

export default SettingScreen;
