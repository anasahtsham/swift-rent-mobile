import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Card, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { useColorsOnFocus } from "../../helpers/SetColors";

const Profile = () => {
  const navigation = useNavigation();

  const colors = useColorsOnFocus();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <View
        style={[styles.header, { backgroundColor: colors.backgroundPrimary }]}
      >
        <Card
          containerStyle={[
            styles.card,
            { borderColor: colors.borderSecondary },
          ]}
        >
          <View style={styles.userInfo}>
            <Image
              source={require("../../assets/icons/userIcon.png")}
              style={styles.userImage}
            />
            <Text style={styles.userName}>Ibrahim Ahtsham</Text>
          </View>
          <Text>+92 317 0572192</Text>
          <Text>ibrahimahthsam2002@gmail.com</Text>
        </Card>
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          <Button
            title="Settings"
            titleStyle={{ color: colors.textSecondary }}
            buttonStyle={[
              styles.button,
              { backgroundColor: colors.backgroundSecondary },
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
  header: {
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: { flex: 1 },
  card: { borderRadius: 10, borderWidth: 4 },
  userInfo: { flexDirection: "row" },
  userImage: { width: 50, height: 50 },
  userName: { marginLeft: 10, fontSize: 20 },
  buttons: {
    alignSelf: "center",
    width: "80%",
  },
  buttonContainer: {
    borderRadius: 20,
    marginTop: 10,
  },
  button: { borderRadius: 20 },
});

export default Profile;
