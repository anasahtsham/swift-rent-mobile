import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
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
          const notifications = response.data.notifications.map(
            (notification) => {
              const phoneNumberRegex = /03\d{9}/g;
              const phoneNumber =
                notification.notificationtext.match(phoneNumberRegex);

              if (phoneNumber) {
                const parts = notification.notificationtext.split(
                  phoneNumber[0]
                );
                notification.notificationtext = (
                  <Text>
                    {parts[0]}
                    <Text
                      style={{
                        color: colors.textDarkBlue,
                        fontSize: FontSizes.small,
                        textDecorationLine: "underline",
                      }}
                      onPress={() => Linking.openURL(`tel:${phoneNumber[0]}`)}
                    >
                      {phoneNumber[0]}
                    </Text>
                    {parts[1]}
                  </Text>
                );
              }

              return notification;
            }
          );

          setAlertsData(notifications);
        } catch (error) {
          // if status 404 then show alert that no notifications found
          if (!error.response.status === 404) {
            Alert.alert("Error", "Something went wrong");
            console.log(error.response);
          }
        } finally {
          setLoading(false);
        }
      };

      fetchNotifications();
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
      {/* if the filteredData is an empty array show text in medium bold size that no notifications yet */}
      {filteredData.length === 0 && !loading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontFamily: "OpenSansRegular",
              fontSize: FontSizes.medium,
              color: colors.textWhite,
            }}
          >
            No notifications yet
          </Text>
        </View>
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
