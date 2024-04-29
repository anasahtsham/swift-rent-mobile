import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { formatUserTypeToFullForm } from "../../../helpers/utils";

export const AlertButton = (props) => {
  const colors = props.colors;

  // R = Rent, L = Lease, C = Complaint, A = Admin

  function getBackgroundColor(notificationType) {
    switch (notificationType) {
      case "R":
        return colors.backgroundGreen;
      case "L":
        return colors.backgroundBlue;
      case "C":
        return colors.backgroundPurple;
      case "A":
        return colors.backgroundRed;
      default:
        return colors.backgroundPrimary;
    }
  }

  return (
    <View
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View
        style={[
          styles.timeAndDate,
          {
            backgroundColor: getBackgroundColor(props.notificationType),
            marginEnd: 10,
          },
        ]}
      >
        <Text style={[styles.timeAndDateText, { color: colors.textWhite }]}>
          {props.dateAndYear}
        </Text>
        <Text style={[styles.timeAndDateText, { color: colors.textWhite }]}>
          {props.time}
        </Text>
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
          {props.name} - {formatUserTypeToFullForm(props.userType)}
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
    </View>
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
