import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { opacityValueForButton } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";

import * as FontSizes from "../../../assets/fonts/FontSizes";

export const PropertiesButton = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {props.address}
          </Text>
          <Image
            tintColor={colors.iconPrimary}
            style={styles.icon}
            source={icons.externalLink}
          />
        </View>

        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.city}
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Image
              style={styles.icon}
              tintColor={colors.iconGreen}
              source={icons.downLongArrow}
            />
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              {props.income}
            </Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Image
              style={styles.icon}
              tintColor={colors.iconRed}
              source={icons.upLongArrow}
            />
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              {props.outcome}
            </Text>
          </View>
          <Text
            style={[
              styles.fontBold,
              {
                color:
                  props.status === "Vacant" ? colors.textRed : colors.textGreen,
              },
            ]}
          >
            {props.status}
          </Text>
        </View>

        {!!props.manager && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Manager:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.manager}
            </Text>
          </View>
        )}

        {!!props.tenant && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Rented To:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.tenant}
            </Text>
          </View>
        )}

        {!!props.rentStatus && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Rented To:{" "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color:
                    props.rentStatus === "Collected"
                      ? colors.textGreen
                      : colors.textRed,
                },
              ]}
            >
              {props.rentStatus}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fontBold: {
    fontFamily: "OpenSansBold",
    fontSize: FontSizes.small,
  },
  fontRegular: {
    fontFamily: "OpenSansRegular",
    fontSize: FontSizes.small,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default PropertiesButton;