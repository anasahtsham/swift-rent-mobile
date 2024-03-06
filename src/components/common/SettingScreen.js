import { Button, Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";

import ThemeSetter from "./buttons/ThemeSetter";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { loadTheme } from "../../helpers";

const SettingScreen = ({ navigation }) => {
  const [colors, setColors] = useState(DefaultTheme);

  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  const handleToggle = () => {
    loadTheme().then((theme) => {
      setColors(theme === "dark" ? DarkTheme : DefaultTheme);
    });
  };
  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
    >
      <Pressable style={styles.button} onTouchEnd={handleToggle}>
        <Text style={{ fontSize: FontSizes.small }}>Change Theme</Text>
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
        onPress={() => navigation.navigate("Owner Tab Navigator")}
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
