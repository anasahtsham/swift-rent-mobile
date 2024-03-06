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
      <ProfileHeader />
      <ScrollView>
        <View style={styles.buttons}>
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
        </View>
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
