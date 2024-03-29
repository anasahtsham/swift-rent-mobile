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
import PropertyMenuHeader from "../../components/common/headers/PropertyMenuHeader";
import { useColors } from "./../../helpers/SetColors";
import { managerOffersData } from "./../../helpers/data/ManagerOffersData";
import PropertyMenuButton from "./buttons/PropertyMenuButton";

const PropertyMenu = ({ route }) => {
  const { propertyAddress } = route.params;
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

  let managerOffersAmount = managerOffersData.length;

  const Card = ({ title, endText, children }) => (
    <View style={[styles.card, { backgroundColor: colors.backgroundPrimary }]}>
      <View style={[styles.headerTextContainer, { marginBottom: 10 }]}>
        <Text style={[styles.cardMainText, { color: colors.textPrimary }]}>
          {title}
        </Text>
        {endText && (
          <Text style={[styles.cardMainText, { color: colors.textGreen }]}>
            {endText}
          </Text>
        )}
      </View>
      {children}
    </View>
  );

  const CardRow = ({ title, value, style }) => (
    <View style={[styles.inRow, { marginBottom: 5 }]}>
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
    <SafeAreaView
      style={{
        backgroundColor: colors.bodyBackground,
        flex: 1,
      }}
    >
      <PropertyMenuHeader propertyAddress={propertyAddress} colors={colors} />
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Card title="Property Information" endText="Managed">
          <CardRow title="Registered On: " value="06-02-2024" />
          <CardRow
            title="On-Rent Months: "
            value="4"
            style={{ color: colors.textGreen }}
          />
          <CardRow
            title="Vacant Months: "
            value="1"
            style={{ color: colors.textRed }}
          />
          <CardRow title="Tenant: " value="Abbas Tariq" />
          <CardRow title="Manager: " value="Hussain Talha" />
        </Card>
        <Card title="Lease Information">
          <CardRow
            title="Lease Ends: "
            value="08-06-2025"
            style={{ fontWeight: "bold" }}
          />
          <CardRow
            title="Due Date: "
            value="15th"
            style={{ fontWeight: "bold" }}
          />
          <CardRow title="Eviction Period: " value="14 Days" />
          <CardRow title="Yearly Increment: " value="10%" />
          <CardRow title="Rent: " value="40,000" />
          <CardRow title="Security: " value="80,000" />
        </Card>

        <View style={styles.buttonContainer}>
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Maintenance Complains List", {
                header: "Maintenance",
              });
            }}
            text={"Maintenance"}
            secondaryText="1"
            secondaryTextColor={colors.textRed}
            colors={colors}
          />
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Maintenance Complains List", {
                header: "Complains",
              });
            }}
            text={"Complains"}
            secondaryText="0"
            secondaryTextColor={colors.textGreen}
            colors={colors}
          />
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Verify Documentation");
            }}
            text={"Receive/ Verify Rent"}
            colors={colors}
          />
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Hire Manager Request Form");
            }}
            text={"Appoint A Manager"}
            colors={colors}
          />
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Register Tenant");
            }}
            text={"Register Tenant"}
            colors={colors}
          />
          <PropertyMenuButton text={"Fire Manager"} colors={colors} />
          <PropertyMenuButton text={"Eviction Notice"} colors={colors} />
          <PropertyMenuButton text={"Chat Manager/Tenant"} colors={colors} />
          <PropertyMenuButton
            text={"Rate Manager /Tenant"}
            colors={colors}
            onPress={() => navigation.navigate("Rating Screen")}
          />
          <PropertyMenuButton
            text={"Rent History"}
            colors={colors}
            onPress={() => navigation.navigate("Rent History")}
          />
          <PropertyMenuButton
            text={"Manager Offers (" + managerOffersAmount + ")"}
            colors={colors}
            onPress={() => navigation.navigate("Manager Offers")}
          />
        </View>

        <View style={{ height: 15 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderRadius: 20,
    alignSelf: "center",
    width: "90%",
    padding: 10,
  },
  headerTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardMainText: {
    fontSize: FontSizes.midSmall,
    fontWeight: "bold",
  },
  cardSubText: {
    fontSize: FontSizes.small,
  },
  cardFetchableData: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    width: "85%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});

export default PropertyMenu;
