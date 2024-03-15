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
import ButtonWithImage from "../../components/common/buttons/ButtonWithImage";
import PropertyMenuHeader from "../../components/common/header/PropertyMenuHeader";
import { useColors } from "./../../helpers/SetColors";

const OwnerPropertyMenu = (props) => {
  const colors = useColors();
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  const Card = ({ title, endText, children, endTextStyle }) => (
    <View style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}>
      <View style={styles.cardHeader}>
        <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
          {title}
        </Text>
        {endText && (
          <Text
            style={[
              styles.cardMainText,
              { color: colors.textGreen },
              endTextStyle,
            ]}
          >
            {endText}
          </Text>
        )}
      </View>
      {children}
    </View>
  );

  const CardRow = ({ title, value, style }) => (
    <View style={styles.rightInRow}>
      <Text style={[styles.cardSubText, { color: colors.textPrimary }]}>
        {title}
      </Text>
      <Text
        style={[styles.cardFetchableData, { color: colors.textPrimary }, style]}
      >
        {value}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: colors.bodyBackground }}>
      <PropertyMenuHeader colors={colors} />
      <View
        style={[
          styles.bottomContainer,
          { backgroundColor: colors.bodyBackground, overflow: "visible" },
        ]}
      >
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 20,
              flexGrow: 1,
            }}
          >
            <Card
              title="Property Information"
              endText="Managed"
              endTextStyle={{ marginRight: 38 }}
            >
              <CardRow title="Registered On" value="06-02-2024" />
              <CardRow
                title="On-Rent Months"
                value="4"
                style={{ color: colors.textGreen, marginRight: "20%" }}
              />
              <CardRow
                title="Vacant Months"
                value="1"
                style={{ color: colors.textRed, marginRight: "20%" }}
              />
              <CardRow
                title="Tenant:"
                value="Abbas Tariq"
                style={{ marginRight: "60%", marginTop: "0.5%" }}
              />
              <CardRow
                title="Manager:"
                value="Hussain Talha"
                style={{ marginRight: "50%", marginTop: "0.5%" }}
              />
            </Card>
            <Card title="Lease Information">
              <CardRow
                title="Lease Ends:"
                value="08-06-2025"
                style={{ fontWeight: "bold" }}
              />
              <CardRow
                title="Due Date:"
                value="15th"
                style={{ fontWeight: "bold" }}
              />
              <CardRow title="Eviction Period:" value="14 Days" />
              <CardRow title="Yearly Increment:" value="10%" />
              <CardRow
                title="Rent 40,000"
                value="Security 80,000"
                style={{ marginRight: "10%", marginTop: "0.5%" }}
              />
            </Card>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonRow}>
                <ButtonWithImage
                  buttonText={"Maintenance"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
                <ButtonWithImage
                  buttonText={"Complaints"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
              </View>
              <View style={styles.buttonRow}>
                <ButtonWithImage
                  buttonText={"Receive/ Verify Rent"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
                <ButtonWithImage
                  buttonText={"Appoint A Manager"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
              </View>
              <View style={styles.buttonRow}>
                <ButtonWithImage
                  buttonText={"Register Tenant"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
                <ButtonWithImage
                  buttonText={"Fire Manager"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
              </View>
              <View style={styles.buttonRow}>
                <ButtonWithImage
                  buttonText={"Eviction Notice"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
                <ButtonWithImage
                  buttonText={"Chat Manager/Tenant"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
              </View>
              <View style={styles.buttonRow}>
                <ButtonWithImage
                  buttonText={"Rate Manager /Tenant"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
                <ButtonWithImage
                  buttonText={"Rent History"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
              </View>
              <View style={styles.buttonRow}>
                <ButtonWithImage
                  buttonText={"Manager Offers (21)"}
                  fontSize={FontSizes.small}
                  width={160}
                  height={65}
                  imageSource={require("../../assets/icons/external-link-button-arrow.png")}
                  tintColor={colors.textPrimary}
                />
              </View>
            </View>
            <View style={{ height: 430 }}></View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    borderRadius: 20,
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  card: {
    marginTop: "5%",
    borderRadius: 20,
    alignSelf: "center",
    width: "90%",
    paddingBottom: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginRight: "10%",
  },
  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    marginTop: 10,
  },
});

export default OwnerPropertyMenu;
