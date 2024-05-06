import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import AnalyticalReportHeader from "../../headers/AnalyticalReportHeader";

const AnalyticalReport = () => {
  const colors = useColors();
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true; // This will prevent the app from closing
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  // Either this below component can be renaamed merged or placed inside a new file to foloow component design practices:
  const Card = ({ title, colors, data }) => (
    <View
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}
    >
      <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
        {title}
      </Text>
      {data.map((item, index) => (
        <View key={index} style={styles.rightInRow}>
          <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
            {item.label}
          </Text>
          <Text
            style={[
              styles.cardFetchableData,
              { color: item.color || colors.textPrimary },
            ]}
          >
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: colors.bodyBackground, flex: 1 }}>
      <AnalyticalReportHeader colors={colors} />
      <View
        style={[
          styles.bottomContainer,
          { backgroundColor: colors.bodyBackground },
        ]}
      >
        <ScrollView>
          <Card
            title="Properties Status"
            colors={colors}
            data={[
              { label: "Total Properties", value: 5 },
              {
                label: "Properties on Rent",
                value: 4,
                color: colors.textGreen,
              },
              { label: "Vacant Properties", value: 1, color: colors.textRed },
              { label: "Managed Properties", value: 2 },
            ]}
          />
          <Card
            title="Maintenance"
            colors={colors}
            data={[
              { label: "Total Requests", value: 6 },
              { label: "Accepted", value: 4, color: colors.textGreen },
              { label: "Rejected", value: 1, color: colors.textRed },
              { label: "Pending", value: 2 },
            ]}
          />
          <Card
            title="Complaints"
            colors={colors}
            data={[
              { label: "Total Requests", value: 5 },
              { label: "Resolved Requests", value: 4, color: colors.textGreen },
              { label: "Pending Requests", value: 4, color: colors.textGreen },
            ]}
          />
          <View style={{ height: 350 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AnalyticalReport;

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  header: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },

  topCard: {
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },

  topCardTopTextContainer: {
    paddingTop: "2%",
  },
  topCardTopText: {
    fontSize: FontSizes.small,
    paddingLeft: "4%",
    textAlign: "left",
  },

  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nestedText: {
    fontSize: FontSizes.small,
    paddingLeft: "6%",
    textAlign: "left",
    marginRight: "10%",
  },
  currencyStyles: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
    paddingLeft: "1%",
  },

  monthNameText: {
    paddingTop: "1%",
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
    paddingTop: "4%",
    paddingLeft: "4%",
    paddingRight: "4%",
  },
  arrowImageDimensions: {
    height: 20,
    width: 20,
    marginLeft: "12%",
  },
  barGraphImageDimensions: {
    height: 100,
    width: 100,
    marginTop: "2%",
    justifyContent: "center",
    alignSelf: "center",
  },

  bottomContainer: {
    borderRadius: 20,
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  card: {
    marginTop: "5%",
    borderRadius: 20,
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    paddingBottom: 10,
  },

  cardMainText: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
    paddingLeft: "3%",
    paddingTop: "3%",
    paddingBottom: "1%",
  },
  cardSubText: {
    fontSize: FontSizes.small,
    paddingLeft: "4%",
    paddingVertical: "0.5%",
  },
  cardFetchableData: {
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "30%",
    fontSize: FontSizes.small,
  },
});
