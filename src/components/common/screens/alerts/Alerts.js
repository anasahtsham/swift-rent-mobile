import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { useColorsOnFocus } from "../../../../helpers/SetColors";
import { AlertButton } from "../../buttons/AlertButton";
import AlertsHeader from "../../headers/AlertsHeader";

const Alerts = (props) => {
  const navigation = useNavigation();
  const colors = useColorsOnFocus();

  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleHeaderButtonPress = (type) => {
    setSelectedTypes((prevTypes) => {
      if (prevTypes.includes(type)) {
        // If type is already selected, remove it from the array
        return prevTypes.filter((t) => t !== type);
      } else {
        // Otherwise, add the type to the array
        return [...prevTypes, type];
      }
    });
  };

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

  const filteredData = props.alertsData.filter(
    (alert) =>
      selectedTypes.length === 0 ||
      selectedTypes.includes(alert.notificationType)
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <AlertsHeader
        colors={colors}
        onHeaderButtonPress={handleHeaderButtonPress}
        notificationsAmount={props.alertsData.length}
        selectedTypes={selectedTypes}
      />
      <FlatList
        data={filteredData}
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
