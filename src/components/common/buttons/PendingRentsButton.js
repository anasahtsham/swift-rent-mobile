import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { formatNumberToCrore } from "./../../../helpers/utils";

export const PendingRentsButton = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View>
        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.address}
        </Text>

        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.city}
        </Text>

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

        {!!props.rentDue && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Rent:{" "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textRed,
                },
              ]}
            >
              {formatNumberToCrore(props.rentDue)}{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              PKR
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

export default PendingRentsButton;
