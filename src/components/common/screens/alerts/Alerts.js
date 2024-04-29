import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { BASE_URL } from "../../../../constants";
import { useColorsOnFocus } from "../../../../helpers/SetColors";
import { AlertButton } from "../../buttons/AlertButton";
import AlertsHeader from "../../headers/AlertsHeader";
import { useUserID } from "./../../../../helpers/SetUserID";
import { useUserType } from "./../../../../helpers/SetUserType";

const Alerts = () => {
  const navigation = useNavigation();
  const colors = useColorsOnFocus();
  const userID = useUserID();
  const userType = useUserType();

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [alertsData, setAlertsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isCancelled = false;

      const fetchNotifications = async () => {
        if (!userID || !userType) return;
        try {
          const response = await axios.post(
            `${BASE_URL}/api/common/get-user-notifications`,
            {
              userID: userID,
              userType: userType,
            }
          );

          if (!isCancelled && response.data.notifications) {
            setAlertsData(response.data.notifications);
          }
        } catch (error) {
          if (!isCancelled) {
            console.error(error);
            Alert.alert("Error", error.response?.data?.message);
          }
        } finally {
          if (!isCancelled) {
            setLoading(false);
          }
        }
      };

      fetchNotifications();

      return () => {
        isCancelled = true;
      };
    }, [userID, userType])
  );

  const handleHeaderButtonPress = (type) => {
    setSelectedTypes((prevTypes) => {
      if (prevTypes.includes(type)) {
        return prevTypes.filter((t) => t !== type);
      } else {
        return [...prevTypes, type];
      }
    });
  };

  const renderItem = ({ item: alert }) => (
    <AlertButton
      colors={colors}
      key={alert.id}
      dateAndYear={alert.dateandyear}
      time={alert.time}
      name={alert.sendername}
      userType={alert.sendertype}
      notificationText={alert.notificationtext}
      notificationType={alert.notificationtype}
      navigation={navigation}
    />
  );

  const filteredData = alertsData.filter(
    (alert) =>
      selectedTypes.length === 0 ||
      selectedTypes.includes(alert.notificationtype)
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <AlertsHeader
        colors={colors}
        onHeaderButtonPress={handleHeaderButtonPress}
        notificationsAmount={alertsData.length}
        selectedTypes={selectedTypes}
      />
      {loading && (
        <ActivityIndicator
          size="large"
          color={colors.textPrimary}
          style={{ flex: 1 }}
        />
      )}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
