import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";

const MaintenanceComplainsListHeader = (props) => {
  const colors = props.colors;
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <View
        style={[
          styles.headerCard,
          {
            backgroundColor: colors.backgroundPrimary,
            borderColor: colors.borderBlue,
          },
        ]}
      >
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View style={styles.rightInRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Total Maintenance Expenses
            </Text>
            <Text style={[styles.nestedText, { color: colors.textRed }]}>
              -8500
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 10,
  },
  headerCard: {
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },
  topCardTopText: {
    fontSize: FontSizes.small,
    textAlign: "left",
  },
  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nestedText: {
    fontSize: FontSizes.small,
    textAlign: "left",
  },
  currencyStyles: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
  },
  monthNameText: {
    fontWeight: "bold",
    fontSize: FontSizes.small,
  },
  monthNameTextNested: {
    fontWeight: "bold",
    fontSize: FontSizes.small,
  },
  topCardRowEnd: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowImageDimensions: {
    height: 20,
    width: 20,
  },
  barGraphImageDimensions: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
});

export default MaintenanceComplainsListHeader;
