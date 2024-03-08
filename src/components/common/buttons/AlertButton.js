import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { opacityValueForButton } from "../../../constants";

import * as FontSizes from "../../../assets/fonts/FontSizes";

export const AlertButton = (props) => {
  const colors = props.colors;

  function getBackgroundColor(notificationType) {
    switch (notificationType) {
      case "Maintenance":
        return colors.backgroundRed;
      case "Complains":
        return colors.backgroundYellow;
      case "Rent":
        return colors.backgroundGreen;
      default:
        return colors.backgroundPrimary;
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View
        style={[
          styles.timeAndDate,
          {
            backgroundColor: getBackgroundColor(props.notificationType),
          },
        ]}
      >
        <Text style={styles.timeAndDateText}>{props.dateAndYear}</Text>
        <Text style={styles.timeAndDateText}>{props.time}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text
          style={[
            styles.text,
            {
              color: colors.textPrimary,
            },
          ]}
        >
          {props.name} - {props.userType}
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: colors.textPrimary,
              flexShrink: 1,
            },
          ]}
        >
          {props.notificationText}
        </Text>
      </View>
      <View>
        <Image
          style={styles.buttonImage}
          tintColor={colors.iconPrimary}
          source={require("../../../assets/icons/external-link.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  timeAndDate: {
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    marginEnd: 5,
  },
  timeAndDateText: {
    textAlign: "center",
    fontSize: FontSizes.extraSmall,
  },
  text: {
    fontSize: FontSizes.small,
  },
  buttonImage: {
    width: 20,
    height: 20,
  },
  button: {
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
