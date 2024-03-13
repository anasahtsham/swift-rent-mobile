import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../constants";
import { useColors } from "./../../helpers/SetColors";
import MonthReportHeader from "./header/MonthReportHeader";

const MonthReport = (props) => {
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

  return (
    <SafeAreaView style={{ backgroundColor: colors.bodyBackground, flex: 1 }}>
      <MonthReportHeader colors={colors} />
      <View
        style={[
          styles.bottomContainer,
          { backgroundColor: colors.bodyBackground },
        ]}
      >
        <ScrollView>
          <TouchableOpacity
            activeOpacity={opacityValueForButton}
            style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}
          >
            <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
              Properties Status
            </Text>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Total Properties
              </Text>
              <Text
                style={[
                  styles.cardFetchableData,
                  { color: colors.textPrimary },
                ]}
              >
                5
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Properties on Rent
              </Text>
              <Text
                style={[styles.cardFetchableData, { color: colors.textGreen }]}
              >
                4
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Vacant Properties
              </Text>
              <Text
                style={[styles.cardFetchableData, { color: colors.textRed }]}
              >
                1
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Managed Properties
              </Text>
              <Text
                style={[
                  styles.cardFetchableData,
                  { color: colors.textPrimary },
                ]}
              >
                2
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={opacityValueForButton}
            style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}
          >
            <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
              Maintenance
            </Text>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Total Requests
              </Text>
              <Text
                style={[
                  styles.cardFetchableData,
                  { color: colors.textPrimary },
                ]}
              >
                6
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Accepted
              </Text>
              <Text
                style={[styles.cardFetchableData, { color: colors.textGreen }]}
              >
                4
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Rejected
              </Text>
              <Text
                style={[styles.cardFetchableData, { color: colors.textRed }]}
              >
                1
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Pending
              </Text>
              <Text
                style={[
                  styles.cardFetchableData,
                  { color: colors.textPrimary },
                ]}
              >
                2
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={opacityValueForButton}
            style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}
          >
            <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
              Complaints
            </Text>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Total Requests
              </Text>
              <Text
                style={[
                  styles.cardFetchableData,
                  { color: colors.textPrimary },
                ]}
              >
                5
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Resolved Requests
              </Text>
              <Text
                style={[styles.cardFetchableData, { color: colors.textGreen }]}
              >
                4
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
                Pending Requests
              </Text>
              <Text
                style={[styles.cardFetchableData, { color: colors.textGreen }]}
              >
                4
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={{ height: 50 }}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 14,
    paddingLeft: "4%",
    paddingVertical: "0.5%",
  },
  cardFetchableData: {
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "30%",
  },
});

export default MonthReport;
