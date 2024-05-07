import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { formatNumberToCrore } from "./../../../helpers/utils/index";

export const AllMaintenancesCard = (props) => {
  const colors = props.colors;
  return (
    <View
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View>
        <View
          style={{ flexDirection: "row", marginBottom: 5, flexWrap: "wrap" }}
        >
          <Text
            style={[
              styles.fontBold,
              { color: colors.textPrimary, fontSize: FontSizes.medium },
            ]}
          >
            {props.title}
          </Text>
        </View>

        {!!props.description && (
          <View
            style={{ flexDirection: "row", marginBottom: 5, flexWrap: "wrap" }}
          >
            <Text
              style={[
                styles.fontBold,
                { color: colors.textPrimary, fontSize: FontSizes.small },
              ]}
            >
              {props.description}
            </Text>
          </View>
        )}

        <View
          style={{ flexDirection: "row", marginBottom: 5, flexWrap: "wrap" }}
        >
          <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
            Address:{" "}
          </Text>
          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {props.address}
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", marginBottom: 5, flexWrap: "wrap" }}
        >
          <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
            Cost:{" "}
          </Text>
          <Text style={[styles.fontBold, { color: colors.textRed }]}>
            {`${formatNumberToCrore(props.cost)} PKR`}
          </Text>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
            Date:{" "}
          </Text>
          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {props.date}
          </Text>
        </View>
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

export default AllMaintenancesCard;
