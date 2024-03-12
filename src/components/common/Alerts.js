import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useColorsOnFocus } from "../../helpers/SetColors";
import { AlertButton } from "./buttons/AlertButton";
import AlertsHeader from "./header/AlertsHeader";

const Alerts = (props) => {
  const navigation = useNavigation();

  const colors = useColorsOnFocus();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <AlertsHeader colors={colors} />
      <ScrollView>
        <View style={styles.buttons}>
          {props.alertsData.map((alert) => (
            <AlertButton
              colors={colors}
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
  bottomSpace: { height: 70 },
});

export default Alerts;
