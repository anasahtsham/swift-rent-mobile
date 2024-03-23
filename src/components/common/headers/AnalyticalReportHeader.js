import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import AnalyticalReportLineGraph from "../AnalyticalReportLineGraph";

const AnalyticalReportHeader = (props) => {
  const colors = props.colors;

  const windowWidth = useWindowDimensions().width;
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
          {/*Old image of bar graph: */}
          {/* <Image
            style={styles.barGraphImageDimensions}
            source={icons.barGraph}
          /> */}
          <AnalyticalReportLineGraph />
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
