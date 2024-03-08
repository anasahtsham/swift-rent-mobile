import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { useColorsOnFocus } from "../../helpers/SetColors";
import ProfileHeader from "./header/ProfileHeader";

const Profile = () => {
  const navigation = useNavigation();

  const colors = useColorsOnFocus();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <ProfileHeader colors={colors} />
      <ScrollView>
        <View style={styles.buttons}>
          <Button
            title="Change Password"
            titleStyle={{ color: colors.textPrimary }}
            buttonStyle={[
              styles.button,
              { backgroundColor: colors.backgroundPrimary },
            ]}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Change Password")}
          />
          <Button
            title="FAQ's"
            titleStyle={{ color: colors.textPrimary }}
            buttonStyle={[
              styles.button,
              { backgroundColor: colors.backgroundPrimary },
            ]}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("FAQ Screen")}
          />
          <Button
            title="My Ratings"
            titleStyle={{ color: colors.textPrimary }}
            buttonStyle={[
              styles.button,
              { backgroundColor: colors.backgroundPrimary },
            ]}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Setting Screen")}
          />
          <Button
            title="Settings"
            titleStyle={{ color: colors.textPrimary }}
            buttonStyle={[
              styles.button,
              { backgroundColor: colors.backgroundPrimary },
            ]}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Setting Screen")}
          />
          <Button
            title="Logout"
            titleStyle={{ color: colors.textPrimary }}
            buttonStyle={[
              styles.button,
              { backgroundColor: colors.backgroundPrimary },
            ]}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Welcome Screen")}
          />
        </View>
        <View style={{ height: 60 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttons: {
    alignSelf: "center",
    width: "80%",
  },
  buttonContainer: {
    borderRadius: 20,
    marginVertical: 10,
  },
  button: { borderRadius: 20 },
});

export default Profile;
