import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import { BASE_URL } from "../../constants";
import { saveUserID, saveUserType } from "../../helpers";
import { useColorsOnFocus } from "../../helpers/SetColors";
import { useUserID } from "../../helpers/SetUserID";
import ProfileHeader from "./headers/ProfileHeader";

const Profile = () => {
  const userID = useUserID();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const colors = useColorsOnFocus();

  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (userID) {
      axios
        .post(`${BASE_URL}/api/common/get-user-profile-info`, {
          userID: userID,
        })
        .then((response) => {
          if (response.data.success) {
            setUserProfile(response.data.userProfile);
          } else {
            console.error(response.data.error);
          }
        })
        .catch((error) => {
          Alert.alert("Error", error.response.data.error);
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userID]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <ProfileHeader
        loading={loading}
        userName={userProfile.name}
        phone={userProfile.phone}
        email={userProfile.email}
        colors={colors}
      />
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
            title="My Ratings"
            titleStyle={{ color: colors.textPrimary }}
            buttonStyle={[
              styles.button,
              { backgroundColor: colors.backgroundPrimary },
            ]}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Ratings")}
          />
          <Button
            title="Customer Support"
            titleStyle={{ color: colors.textPrimary }}
            buttonStyle={[
              styles.button,
              { backgroundColor: colors.backgroundPrimary },
            ]}
            containerStyle={styles.buttonContainer}
            onPress={() =>
              navigation.navigate("Problem Form", {
                headerText: "Customer Support",
              })
            }
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
            onPress={() => {
              saveUserID("");
              saveUserType("");
              navigation.navigate("Welcome Screen");
            }}
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
