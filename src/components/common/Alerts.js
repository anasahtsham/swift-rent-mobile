import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { useColorsOnFocus } from "../../helpers/SetColors";
import { AlertButton } from "./buttons/AlertButton";
import AlertsHeader from "./header/AlertsHeader";

const Alerts = (props) => {
  const navigation = useNavigation();

  const colors = useColorsOnFocus();

  const renderItem = ({ item: alert }) => (
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
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <AlertsHeader colors={colors} />
      <FlatList
        data={props.alertsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.buttons}
        ListFooterComponent={<View style={styles.bottomSpace} />}
      />
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
