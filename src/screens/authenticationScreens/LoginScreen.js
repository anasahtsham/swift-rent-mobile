import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import Header from "../../components/common/header";
import CustomTextInput from "../../components/common/CustomTextInput";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import SwiftRentLogo150 from "../../components/common/SwiftRentLogo150";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import { loadTheme } from "../../helpers";
import BigButton from "../../components/common/BigButton";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  const [colors, setColors] = useState(DefaultTheme);

  //update theme on load
  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <SwiftRentLogo150 />
        <CustomTextInput
          value={username}
          onChangeText={setUsername}
          placeholder={English.emailOrNumber}
        />
        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        {/* <Pressable style={styles.button} onPress={handleLogin}>
          <Text>Login</Text>
        </Pressable> */}
        <BigButton buttonText={English.login} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
