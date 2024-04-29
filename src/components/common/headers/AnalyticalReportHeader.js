import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import AnalyticalReportLineGraph from "../screens/analytics/AnalyticalReportLineGraph";

const AnalyticalReportHeader = (props) => {
  const colors = props.colors;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const totalRevenue = [
    14000, 21000, 28000, 35000, 42000, 49000, 45500, 42000, 38500, 35000, 31500,
    35000, 38500, 42000, 45500, 42000, 38500, 35000, 31500, 35000, 38500, 42000,
    45500, 42000, 38500, 35000, 31500, 35000, 38500, 42000,
  ];

  const maintenanceCost = [
    3000, 4000, 6000, 7000, 9000, 10000, 4500, 5000, 7500, 9000, 8500, 8000,
    5500, 3000, 3500, 4000, 6500, 8000, 10500, 11500, 13500, 14000, 13000,
    10500, 8500, 6500, 6000, 6500, 9000, 8500,
  ];

  const totalProfit = totalRevenue.map(
    (revenue, index) => revenue - maintenanceCost[index]
  );

  const data = [
    {
      values: maintenanceCost,
      color: colors.textRed, // Maintenance cost
      months: monthNames,
    },
    {
      values: totalProfit,
      color: colors.textPrimary, // Total profit
      months: monthNames,
    },
    {
      values: totalRevenue,
      color: colors.textGreen, // Total revenue
      months: monthNames,
    },
  ];

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <View
        style={[
          styles.topCard,
          {
            backgroundColor: colors.backgroundPrimary,
            borderColor: colors.borderBlue,
          },
        ]}
      >
        <View style={styles.topCardTopTextContainer}>
          <View style={styles.inRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Total Revenue
            </Text>
            <Text style={[styles.nestedText, { color: colors.textGreen }]}>
              +200000
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Maintenance Cost
            </Text>
            <Text style={[styles.nestedText, { color: colors.textRed }]}>
              -8500
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text
              style={[styles.topCardTopText, { color: colors.textPrimary }]}
            >
              Total Profit
            </Text>
            <Text style={[styles.nestedText, { color: colors.textPrimary }]}>
              191500{" "}
              <Text
                style={[styles.currencyStyles, { color: colors.textPrimary }]}
              >
                PKR
              </Text>
            </Text>
          </View>
          <AnalyticalReportLineGraph colors={colors} data={data} />
        </View>
        <View style={styles.cardBottomRowContainer}>
          <Text style={[styles.monthNameText, { color: colors.textPrimary }]}>
            - Profits
          </Text>
          <Text style={[styles.monthNameText, { color: colors.textGreen }]}>
            - Total Revenue
          </Text>
          <Text style={[styles.monthNameText, { color: colors.textRed }]}>
            - Maintenance Cost
          </Text>
          {/* <Text style={[styles.monthNameText, { color: colors.textPrimary }]}>
            Month Name
          </Text>
          <Image
            style={styles.arrowImageDimensions}
            source={icons.downLongArrow}
            tintColor={colors.iconGreen}
          />
          <Text
            style={[styles.monthNameTextNested, { color: colors.textPrimary }]}
          >
            117,000
          </Text>
          <Image
            style={styles.arrowImageDimensions}
            source={icons.upLongArrow}
            tintColor={colors.iconRed}
          />
          <Text
            style={[styles.monthNameTextNested, { color: colors.textPrimary }]}
          >
            11,000
          </Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  topCard: {
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },
  topCardTopText: {
    fontSize: FontSizes.small,
    textAlign: "left",
  },
  inRow: {
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
  cardBottomRowContainer: {
    marginTop: 10,
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

export default AnalyticalReportHeader;
