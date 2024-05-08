import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { useColors } from "../../../../helpers/SetColors";
import { useUserID } from "../../../../helpers/SetUserID";
import { useUserType } from "../../../../helpers/SetUserType";
import { deleteHireRequest } from "../../../owner/DeleteHireRequest";
import { fireManager } from "../../../owner/FireManager";
import PropertyMenuButton from "../../buttons/PropertyMenuButton";
import PropertyMenuHeader from "../../headers/PropertyMenuHeader";
import { sendRentCollectionRequest } from "./rent_collection/SendRentCollectionRequest";

const PropertyMenu = ({ route }) => {
  const userID = useUserID();
  const userType = useUserType();
  const { propertyAddress, id } = route.params;
  const colors = useColors();
  const navigation = useNavigation();

  const [deleteHireRequestLoading, setDeleteHireRequestLoading] =
    useState(false);
  const [fireManagerLoading, setFireManagerLoading] = useState(false);
  const [
    sendRentCollectionRequestLoading,
    setSendRentCollectionRequestLoading,
  ] = useState(false);

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
              navigation.navigate("Property Maintenances", { propertyID: id });
            }}
            text={"Maintenance"}
            secondaryText="1"
            secondaryTextColor={colors.textRed}
            colors={colors}
          />
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Problem Form", {
                headerText: "Register Complaint",
                sendToType: "M",
                propertyID: id,
              });
            }}
            text={"Complaint to Manager"}
            secondaryText="0"
            secondaryTextColor={colors.textGreen}
            colors={colors}
          />
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Problem Form", {
                headerText: "Register Complaint",
                sendToType: "T",
                propertyID: id,
              });
            }}
            text={"Complaint to Tenant"}
            secondaryText="0"
            secondaryTextColor={colors.textGreen}
            colors={colors}
          />
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Problem Form", {
                headerText: "Register Complaint",
                sendToType: "O",
                propertyID: id,
              });
            }}
            text={"Complaint to Owner"}
            secondaryText="0"
            secondaryTextColor={colors.textGreen}
            colors={colors}
          />
          {/* the above buttons always stay on top */}

          {/* tenant related below */}
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Register Tenant", { id: id });
            }}
            text={"Register Tenant"}
            colors={colors}
          />
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Terminate Lease", { propertyID: id });
            }}
            text={"Terminate Lease"}
            colors={colors}
          />

          {/* manager related below */}
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Hire Manager Request Form", {
                propertyID: id,
              });
            }}
            text={"Make Manager Hire Request"}
            colors={colors}
          />
          <PropertyMenuButton
            text={`Manager Offers (${3})`}
            colors={colors}
            onPress={() =>
              navigation.navigate("Manager Offers", { propertyID: id })
            }
          />
          <PropertyMenuButton
            doesNotOpenScreen={true}
            loading={deleteHireRequestLoading}
            onPress={() => {
              deleteHireRequest(id, setDeleteHireRequestLoading);
            }}
            text={"Delete Hire Request"}
            colors={colors}
          />
          <PropertyMenuButton
            doesNotOpenScreen={true}
            loading={fireManagerLoading}
            onPress={() => {
              fireManager(id, setFireManagerLoading);
            }}
            text={"Fire Manager"}
            colors={colors}
          />

          {/* rent related below */}

          {userType === "T" && (
            <>
              {/* only for tenant */}
              <PropertyMenuButton
                doesNotOpenScreen={true}
                loading={sendRentCollectionRequestLoading}
                text={"Send Rent Collection Request as Tenant"}
                colors={colors}
                onPress={() => {
                  sendRentCollectionRequest(
                    id,
                    userID,
                    setSendRentCollectionRequestLoading
                  );
                }}
              />

              {/* only for tenant*/}
              <PropertyMenuButton
                text={"Send Online Rent Verification Request as Tenant"}
                colors={colors}
                onPress={() =>
                  navigation.navigate("Send Online Rent Verification Request", {
                    propertyID: id,
                  })
                }
              />
            </>
          )}

          {userType === "M" && (
            <>
              {/* only for manager */}
              <PropertyMenuButton
                text={"Send Online Rent Verification Request as Manager"}
                colors={colors}
                onPress={() =>
                  navigation.navigate("Send Online Rent Verification Request", {
                    propertyID: id,
                  })
                }
              />
              {/* only for manager */}
              <PropertyMenuButton
                text={"Verify Online Payment From Tenant as Manager"}
                colors={colors}
                onPress={() =>
                  navigation.navigate("Verify Online Payment", {
                    propertyID: id,
                  })
                }
              />
              {/* only for manager */}
              <PropertyMenuButton
                text={"Collect Rent From Tenant as Manager"}
                colors={colors}
                onPress={() =>
                  navigation.navigate("Collect Rent", { propertyID: id })
                }
              />
            </>
          )}

          {userType === "O" && (
            <>
              {/* only for owner */}
              <PropertyMenuButton
                text={"Verify Online Payment From (Tenant or Manager) as Owner"}
                colors={colors}
                onPress={() =>
                  navigation.navigate("Verify Online Payment", {
                    propertyID: id,
                  })
                }
              />
              {/* only for owner */}
              <PropertyMenuButton
                text={"Collect Rent From (Tenant or Manager) as Owner"}
                colors={colors}
                onPress={() =>
                  navigation.navigate("Collect Rent", { propertyID: id })
                }
              />
            </>
          )}

          {/* not implemented below */}

          <PropertyMenuButton text={"Eviction Notice"} colors={colors} />
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
          {/* submit picture (most probably remove) */}
          <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Verify Documentation");
            }}
            text={"Submit Picture of Proof"}
            colors={colors}
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
