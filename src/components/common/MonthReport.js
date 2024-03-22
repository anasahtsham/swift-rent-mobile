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
import * as FontSizes from "../../assets/fonts/FontSizes";
import { getColors } from "./../../helpers/SetColors";
import MonthReportHeader from "./headers/MonthReportHeader";

const MonthReport = (props) => {
  const colors = getColors();
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
    <SafeAreaView
      style={{
        backgroundColor: colors.bodyBackground,
        flex: 1,
      }}
    >
      <MonthReportHeader colors={colors} />
      <ScrollView>
        <View
          style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}
        >
          <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
            Properties Status
          </Text>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Total Properties
            </Text>
            <Text
              style={[styles.cardFetchableData, { color: colors.textPrimary }]}
            >
              5
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Properties on Rent
            </Text>
            <Text
              style={[styles.cardFetchableData, { color: colors.textGreen }]}
            >
              4
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Vacant Properties
            </Text>
            <Text style={[styles.cardFetchableData, { color: colors.textRed }]}>
              1
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Managed Properties
            </Text>
            <Text
              style={[styles.cardFetchableData, { color: colors.textPrimary }]}
            >
              2
            </Text>
          </View>
        </View>
        <View
          style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}
        >
          <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
            Maintenance
          </Text>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Total Requests
            </Text>
            <Text
              style={[styles.cardFetchableData, { color: colors.textPrimary }]}
            >
              6
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Accepted
            </Text>
            <Text
              style={[styles.cardFetchableData, { color: colors.textGreen }]}
            >
              4
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Rejected
            </Text>
            <Text style={[styles.cardFetchableData, { color: colors.textRed }]}>
              1
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Pending
            </Text>
            <Text
              style={[styles.cardFetchableData, { color: colors.textPrimary }]}
            >
              2
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.card,
            { backgroundColor: colors.backgroundPrimary, marginBottom: 10 },
          ]}
        >
          <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
            Complaints
          </Text>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Total Requests
            </Text>
            <Text
              style={[styles.cardFetchableData, { color: colors.textPrimary }]}
            >
              5
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Resolved Requests
            </Text>
            <Text
              style={[styles.cardFetchableData, { color: colors.textGreen }]}
            >
              4
            </Text>
          </View>
          <View style={styles.inRow}>
            <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
              Pending Requests
            </Text>
            <Text
              style={[styles.cardFetchableData, { color: colors.textGreen }]}
            >
              4
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    borderRadius: 20,
    alignSelf: "center",
    width: "90%",
    marginTop: 20,
    padding: 20,
  },

  cardMainText: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardSubText: {
    fontSize: FontSizes.small,
    marginBottom: 5,
  },
  cardFetchableData: {
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: FontSizes.small,
  },
});

export default MonthReport;
