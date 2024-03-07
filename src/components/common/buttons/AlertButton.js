import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { opacityValueForButton } from "../../../constants";
import { useColorsOnFocus } from "../../../helpers/SetColors";

import * as FontSizes from "../../../assets/fonts/FontSizes";

export const AlertButton = (props) => {
  const colors = useColorsOnFocus();
  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View
        style={[styles.timeAndDate, { backgroundColor: props.backgroundColor }]}
      >
        <Text style={styles.timeAndDateText}>19:02 2024</Text>
        <Text style={styles.timeAndDateText}>7:04 PM</Text>
      </View>
      <View>
        <Text
          style={[
            styles.text,
            {
              color: colors.textPrimary,
            },
          ]}
        >
          Nadeem - Manager
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: colors.textPrimary,
            },
          ]}
        >
          Maintenance Requested
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
