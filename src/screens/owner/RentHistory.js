import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React, { useEffect } from "react";
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { backgroundPrimary } from "../../assets/themes/DefaultColorScheme";

const RentHistory = ({ route }) => {
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
    <View style={{ flex: 1, backgroundColor: colors.bodyBackground }}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Rent History
      </Text>
      <View style={styles.rentHistoryCardContainer}>
        <View
          style={[
            styles.rentHistoryCard,
            { backgroundColor: colors.backgroundPrimary },
          ]}
        >
          <Text
            style={[
              styles.date,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            January 2024
          </Text>
          <View style={styles.row}>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              Paid On:
            </Text>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              5th
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              Amount:
            </Text>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              20,000
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.rentHistoryCard,
            { backgroundColor: colors.backgroundPrimary },
          ]}
        >
          <Text
            style={[
              styles.date,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            January 2024
          </Text>
          <View style={styles.row}>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              Paid On:
            </Text>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              5th
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              Amount:
            </Text>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              20,000
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.rentHistoryCard,
            { backgroundColor: colors.backgroundPrimary },
          ]}
        >
          <Text
            style={[
              styles.date,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            January 2024
          </Text>
          <View style={styles.row}>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              Paid On:
            </Text>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              5th
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              Amount:
            </Text>
            <Text
              style={{ fontSize: FontSizes.small, color: colors.textPrimary }}
            >
              20,000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },

  rentHistoryCardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rentHistoryCard: {
    height: 90,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: "center",
    width: "90%",
    paddingBottom: 10,
  },

  title: {
    fontSize: FontSizes.medium,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 8,
  },

  date: {
    paddingLeft: 10,
    paddingTop: 10,
    textAlign: "left",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default RentHistory;
