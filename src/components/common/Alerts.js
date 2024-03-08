import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AlertButton } from "./buttons/AlertButton";

import { useColorsOnFocus } from "../../helpers/SetColors";
import AlertsHeader from "./header/AlertsHeader";
import { alertsData } from "../../helpers/AlertsData";

const Alerts = () => {
  const navigation = useNavigation();

  const colors = useColorsOnFocus();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <AlertsHeader />
      <ScrollView>
        <View style={styles.buttons}>
          {alertsData.map((alert) => (
            <AlertButton
              key={alert.id}
              dateAndYear={alert.dateAndYear}
              time={alert.time}
              name={alert.name}
              userType={alert.userType}
              notificationText={alert.notificationText}
              notificationType={alert.notificationType}
              navigation={navigation}
            />
          ))}
        </View>
        <View style={styles.bottomSpace}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttons: {
    alignSelf: "center",
    width: "90%",
  },
  bottomSpace: { height: 60 },
});

export default Alerts;
