import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { formatNumberToCrore } from "../../../helpers/utils";

export const RentsCard = (props) => {
  const colors = props.colors;
  return (
    <View
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View>
        <Text
          style={[
            styles.fontBold,
            { color: colors.textPrimary, fontSize: FontSizes.medium },
          ]}
        >
          {props.address}
        </Text>

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

        {!!props.amountCollected && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              {props.header === "Received Rents"
                ? "Amount Collected: "
                : "Pending Rent: "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color:
                    props.header === "Received Rents"
                      ? colors.textGreen
                      : colors.textRed,
                },
              ]}
            >
              {formatNumberToCrore(props.amountCollected)}{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              PKR
            </Text>
          </View>
        )}

        {!!props.createdOn && (
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Created On:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.createdOn}
            </Text>
          </View>
        )}
      </View>
    </View>
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

export default RentsCard;
