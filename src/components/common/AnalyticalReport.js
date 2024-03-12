import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as DarkTheme from "../../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../../assets/themes/LoadingColorScheme";
import { loadLanguage, loadTheme } from "../../helpers";
import { icons } from "../../helpers/ImageImports";

const OwnerAnalyticalReport = ({ navigation }) => {
  const [colors, setColors] = useState(LoadingTheme);

  //update theme on load
  useFocusEffect(() => {
    updateTheme();
  });

  const [languages, setLanguage] = useState(English);

  //update language on load
  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguage(language === "english" ? English : Urdu);
    });
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

  //update theme on clicking toggle theme button
  function updateTheme() {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.bodyBackground, flex: 1 }}>
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
            <View style={styles.rightInRow}>
              <Text
                style={[styles.topCardTopText, { color: colors.textPrimary }]}
              >
                Total Revenue
              </Text>
              <Text style={[styles.nestedText, { color: colors.textGreen }]}>
                +200000
              </Text>
            </View>
            <View style={styles.rightInRow}>
              <Text
                style={[styles.topCardTopText, { color: colors.textPrimary }]}
              >
                Maintenance Cost
              </Text>
              <Text style={[styles.nestedText, { color: colors.textRed }]}>
                -8500
              </Text>
            </View>
            <View style={styles.rightInRow}>
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
            <Image
              style={styles.barGraphImageDimensions}
              source={icons.barGraph}
            />
          </View>
          <View style={styles.topCardRowEnd}>
            <Text style={[styles.monthNameText, { color: colors.textPrimary }]}>
              Month Name
            </Text>
            <Image
              style={styles.arrowImageDimensions}
              source={icons.downLongArrow}
              tintColor={colors.iconGreen}
            />
            <Text
              style={[
                styles.monthNameTextNested,
                { color: colors.textPrimary },
              ]}
            >
              117,000
            </Text>
            <Image
              style={styles.arrowImageDimensions}
              source={icons.upLongArrow}
              tintColor={colors.iconRed}
            />
            <Text
              style={[
                styles.monthNameTextNested,
                { color: colors.textPrimary },
              ]}
            >
              11,000
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.bottomContainer,
          { backgroundColor: colors.bodyBackground },
        ]}
      >
        <ScrollView>
          <Pressable
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
          </Pressable>
          <Pressable
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
          </Pressable>
          <Pressable
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
              <Text style={[styles.cardFetchableData, { color: "green" }]}>
                4
              </Text>
            </View>
          </Pressable>
          <Pressable
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
              <Text style={[styles.cardFetchableData, { color: "green" }]}>
                4
              </Text>
            </View>
          </Pressable>
          <Pressable
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
              <Text style={[styles.cardFetchableData, { color: "green" }]}>
                4
              </Text>
            </View>
          </Pressable>
          <Pressable
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
              <Text style={[styles.cardFetchableData, { color: "green" }]}>
                4
              </Text>
            </View>
          </Pressable>
          <Pressable
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
              <Text style={[styles.cardFetchableData, { color: "green" }]}>
                4
              </Text>
            </View>
          </Pressable>
        </ScrollView>
        <View style={{ height: 280 }}></View>
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

export default OwnerAnalyticalReport;
