import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BASE_URL } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { useUserID } from "../../../../helpers/SetUserID";
import { useUserType } from "../../../../helpers/SetUserType";
import {
  formatNumberToCrore,
  formatUserTypeToFullForm,
} from "../../../../helpers/utils";
import { deleteHireRequest } from "../../../owner/DeleteHireRequest";
import { deleteProperty } from "../../../owner/DeleteProperty";
import { fireManager } from "../../../owner/FireManager";
import PropertyMenuButton from "../../buttons/PropertyMenuButton";
import PropertyMenuHeader from "../../headers/PropertyMenuHeader";
import { deleteLeaseRequest } from "./../../../owner/DeleteLeaseRequest";
import { sendRentCollectionRequest } from "./rent_collection/SendRentCollectionRequest";

const PropertyMenu = ({ route }) => {
  const userID = useUserID();
  const userType = useUserType();
  const { id } = route.params;
  const colors = useColors();
  const navigation = useNavigation();
  const [
    loadingPropertyMenuInfoAndButtons,
    setLoadingPropertyMenuInfoAndButtons,
  ] = useState(true);

  const [deleteHireRequestLoading, setDeleteHireRequestLoading] =
    useState(false);
  const [fireManagerLoading, setFireManagerLoading] = useState(false);
  const [
    sendRentCollectionRequestLoading,
    setSendRentCollectionRequestLoading,
  ] = useState(false);
  const [deletePropertyLoading, setDeletePropertyLoading] = useState(false);
  const [deleteLeaseRequestLoading, setDeleteLeaseRequestLoading] =
    useState(false);

  //header
  const [header, setHeader] = useState([
    {
      propertyAddress: "Property Address",
      rentStatus: {
        tenantPaymentStatus: "Status",
        managerPaymentStatus: "Status",
      },
      totalMaintenanceCost: 0,
      totalPropertyRevenue: 0,
      managerName: "Manager Name",
      ownerName: "Owner Name",
    },
  ]);

  //body
  const [propertyInformation, setPropertyInformation] = useState([
    {
      registeredOn: "Date",
      onRentDays: 0,
      offRentDays: 0,
    },
  ]);

  const [leaseInformation, setLeaseInformation] = useState([
    {
      tenantid: 0,
      tenantname: "Tenant Name",
      registeredbyid: 0,
      registeredbyname: "Registraar Name",
      registeredbytype: "Type",
      leaseendson: "Date",
      duedate: "0",
      fine: "0",
      incrementpercentage: "0",
      incrementperiod: "0",
      rent: "10000",
      securitydeposit: "0",
      advancepayment: "0",
      advancepaymentformonths: "0",
    },
  ]);

  const [managerContract, setManagerContract] = useState([
    {
      managerid: 0,
      managername: "Manager Name",
      salarypaymenttype: "Payment Type",
      salaryfixed: 0,
      salarypercentage: "0%",
      whobringstenant: "Who Brings Tenant",
      rent: "0",
      specialcondition: "",
      needhelpwithlegalwork: false,
    },
  ]);

  //buttons
  const [buttons, setButtons] = useState([
    {
      managerOffers: false,
      collectRent: false,
      verifyOnlineRent: false,
      submitVerificationRequest: false,
      submitRentCollectionRequest: false,
      submitVerificationRequest: false,
    },
  ]);

  const fetchData = async () => {
    setLoadingPropertyMenuInfoAndButtons(true);

    if (userType === "O") {
      const data = {
        ownerID: userID,
        propertyID: id,
      };

      axios
        .post(`${BASE_URL}/api/owner/fetch-property-detail`, data)
        .then((response) => {
          setHeader([response.data.propertyDetail.header]);
          setPropertyInformation([
            response.data.propertyDetail.body.propertyInformation,
          ]);
          setLeaseInformation([
            response.data.propertyDetail.body.leaseInformation,
          ]);
          setManagerContract([
            response.data.propertyDetail.body.managerContract,
          ]);
          setButtons([response.data.propertyDetail.buttons]);
        })
        .catch((error) => {
          console.log(JSON.stringify(error.reponse, null, 2));
          Alert.alert("Error", "Something went wrong");
          navigation.goBack();
        })
        .finally(() => {
          setLoadingPropertyMenuInfoAndButtons(false);
        });
    }

    if (userType === "M") {
      const data = {
        managerID: userID,
        propertyID: id,
      };

      axios
        .post(`${BASE_URL}/api/manager/fetch-property-detail`, data)
        .then((response) => {
          setHeader([response.data.propertyDetail.header]);
          setLeaseInformation([
            response.data.propertyDetail.body.leaseInformation,
          ]);
          setManagerContract([response.data.propertyDetail.body.myContract]);
          setButtons([response.data.propertyDetail.buttons]);
        })
        .catch((error) => {
          console.log(JSON.stringify(error.reponse, null, 2));
          Alert.alert("Error", "Something went wrong");
          navigation.goBack();
        })
        .finally(() => {
          setLoadingPropertyMenuInfoAndButtons(false);
        });
    }

    if (userType === "T") {
      const data = {
        tenantID: userID,
        propertyID: id,
      };

      axios
        .post(`${BASE_URL}/api/tenant/fetch-property-detail`, data)
        .then((response) => {
          setHeader([response.data.propertyDetail.header]);
          setLeaseInformation([
            response.data.propertyDetail.body.leaseInformation,
          ]);
          setButtons([response.data.propertyDetail.buttons]);
        })
        .catch((error) => {
          console.log(JSON.stringify(error.reponse, null, 2));
          Alert.alert("Error", "Something went wrong");
          navigation.goBack();
        })
        .finally(() => {
          setLoadingPropertyMenuInfoAndButtons(false);
        });
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();

      const backAction = () => {
        navigation.goBack();
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [userID, userType])
  );

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

  if (loadingPropertyMenuInfoAndButtons) {
    return (
      <SafeAreaView
        style={{
          backgroundColor: colors.bodyBackground,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PropertyMenuHeader
          loading={loadingPropertyMenuInfoAndButtons}
          colors={colors}
        />
        <ActivityIndicator size="large" color={colors.iconWhite} />
      </SafeAreaView>
    );
  }

  const formatPaymentType = (paymentType) => {
    switch (paymentType) {
      case "P":
        return "Percentage";
      case "F":
        return "Fixed";
      default:
        return paymentType;
    }
  };

  const formatWhoBringsTenant = (whoBringsTenant) => {
    switch (whoBringsTenant) {
      case "O":
        return "Owner";
      case "B":
        return "Both";
      case "M":
        return "Manager";
      default:
        return whoBringsTenant;
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.bodyBackground,
        flex: 1,
      }}
    >
      {userType === "M" && (
        <PropertyMenuHeader // if displaying to manager
          propertyAddress={header[0].propertyAddress}
          ownerName={header[0].ownerName}
          rentStatus={header[0].rentStatus}
          totalIncome={header[0].totalIncome}
          colors={colors}
        />
      )}
      {userType === "T" && (
        <PropertyMenuHeader // if displaying to tenant
          propertyAddress={header[0].propertyAddress}
          ownerName={header[0].ownerName}
          managerName={header[0].managerName}
          rentStatus={header[0].rentStatus}
          totalSubmittedRent={header[0].totalSubmittedRent}
          colors={colors}
        />
      )}
      {userType === "O" && (
        <PropertyMenuHeader // if displaying to owner
          propertyAddress={header[0].propertyAddress}
          tenantPaymentStatus={header[0].rentStatus.tenantPaymentStatus}
          managerPaymentStatus={header[0].rentStatus.managerPaymentStatus}
          totalMaintenanceCost={header[0].totalMaintenanceCost}
          totalPropertyRevenue={header[0].totalPropertyRevenue}
          colors={colors}
        />
      )}

      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {userType === "O" && (
          <Card
            title="Property Information"
            endText={managerContract[0].managerid > 0 ? "Managed" : ""}
          >
            <CardRow
              title="Registered On: "
              value={propertyInformation[0].registeredOn}
            />
            <CardRow
              title="On-Rent Days: "
              value={propertyInformation[0].onRentDays}
              style={{ color: colors.textGreen }}
            />
            <CardRow
              title="Vacant Days: "
              value={propertyInformation[0].offRentDays}
              style={{ color: colors.textRed }}
            />
          </Card>
        )}

        {leaseInformation[0].tenantid > 0 && (
          <Card title="Lease Information">
            {((userType === "O" &&
              (header[0].rentStatus.tenantPaymentStatus === "P" ||
                header[0].rentStatus.tenantPaymentStatus === "C")) ||
              userType === "M") && (
              <CardRow
                title="Tenant: "
                value={leaseInformation[0].tenantname}
              />
            )}
            <CardRow
              title="Registered By: "
              value={`${
                leaseInformation[0].registeredbyname
              } (${formatUserTypeToFullForm(
                leaseInformation[0].registeredbytype
              )})`}
            />
            <CardRow
              title="Lease Ends: "
              value={leaseInformation[0].leaseendson}
            />
            <CardRow title="Due Date: " value={leaseInformation[0].duedate} />
            <CardRow
              title="Fine: "
              value={`${formatNumberToCrore(leaseInformation[0].fine)} PKR`}
            />
            <CardRow
              title="Increment Percentage: "
              value={leaseInformation[0].incrementpercentage.trim() + "%"}
            />
            <CardRow
              title="Increment Period: "
              value={leaseInformation[0].incrementperiod.trim() + " Months"}
            />
            <CardRow
              title="Rent: "
              value={formatNumberToCrore(leaseInformation[0].rent) + " PKR"}
            />
            <CardRow
              title="Security: "
              value={
                formatNumberToCrore(leaseInformation[0].securitydeposit) +
                " PKR"
              }
            />
            <CardRow
              title="Advance Payment: "
              value={
                formatNumberToCrore(leaseInformation[0].advancepayment) +
                " PKR (" +
                leaseInformation[0].advancepaymentformonths.trim() +
                " Months)"
              }
            />
          </Card>
        )}

        {managerContract[0].managerid > 0 && (
          <Card title="Manager Contract">
            {userType === "O" && (
              <CardRow
                title="Manager: "
                value={managerContract[0].managername}
              />
            )}
            <CardRow
              title="Salary Payment Type: "
              value={formatPaymentType(managerContract[0].salarypaymenttype)}
            />
            {managerContract[0].salarypaymenttype === "F" && (
              <CardRow
                title="Salary Fixed: "
                value={formatNumberToCrore(managerContract[0].salaryfixed)}
              />
            )}
            {managerContract[0].salarypaymenttype === "P" && (
              <CardRow
                title="Salary Percentage: "
                value={managerContract[0].salarypercentage}
              />
            )}
            <CardRow
              title="Who Brings Tenant: "
              value={formatWhoBringsTenant(managerContract[0].whobringstenant)}
            />
            <CardRow
              title="Rent: "
              value={formatNumberToCrore(managerContract[0].rent)}
            />
            <CardRow
              title="Special Condition: "
              value={managerContract[0].specialcondition || "None"}
            />
            <CardRow
              title="Need Help With Legal Work: "
              value={managerContract[0].needhelpwithlegalwork ? "Yes" : "No"}
            />
          </Card>
        )}

        {/* buttons */}

        <View style={styles.buttonContainer}>
          {userType === "O" && ( // only for owner
            <PropertyMenuButton
              onPress={() => {
                navigation.navigate("Property Maintenances", {
                  propertyID: id,
                });
              }}
              text={"Maintenance"}
              secondaryTextColor={colors.textRed}
              colors={colors}
            />
          )}

          {leaseInformation[0].tenantid > 0 &&
            userType !== "T" && ( // if tenant exists and user is not tenant
              <PropertyMenuButton
                onPress={() => {
                  navigation.navigate("Problem Form", {
                    headerText: "Register Complaint",
                    sendToType: "T",
                    propertyID: id,
                  });
                }}
                text={"Complaint to Tenant"}
                secondaryTextColor={colors.textGreen}
                colors={colors}
              />
            )}

          {(managerContract[0].managerid > 0 || !!header[0].managerName) &&
            userType !== "M" && ( // if manager exists and user is not manager
              <PropertyMenuButton
                onPress={() => {
                  navigation.navigate("Problem Form", {
                    headerText: "Register Complaint",
                    sendToType: "M",
                    propertyID: id,
                  });
                }}
                text={"Complaint to Manager"}
                secondaryTextColor={colors.textGreen}
                colors={colors}
              />
            )}

          {userType !== "O" && ( // only for non-owners
            <PropertyMenuButton
              onPress={() => {
                navigation.navigate("Problem Form", {
                  headerText: "Register Complaint",
                  sendToType: "O",
                  propertyID: id,
                });
              }}
              text={"Complaint to Owner"}
              secondaryTextColor={colors.textGreen}
              colors={colors}
            />
          )}

          {/* the above buttons always stay on top */}

          {/* tenant related below */}

          {/* manager register tenant button */}
          {leaseInformation[0].tenantid === undefined && // if tenant does not exist
            managerContract[0].whobringstenant !== "O" &&
            userType === "M" && ( //
              <PropertyMenuButton
                onPress={() => {
                  navigation.navigate("Register Tenant", { id: id });
                }}
                text={"Register Tenant"}
                colors={colors}
              />
            )}

          {/* owner register tenant button */}
          {leaseInformation[0].tenantid === undefined && // if tenant does not exist
            (managerContract[0].whobringstenant === "O" ||
              managerContract[0].whobringstenant === "B" ||
              !managerContract[0].managerid) &&
            userType === "O" && (
              <>
                <PropertyMenuButton
                  onPress={() => {
                    navigation.navigate("Register Tenant", { id: id });
                  }}
                  text={"Register Tenant"}
                  colors={colors}
                />
                <PropertyMenuButton
                  onPress={() => {
                    deleteLeaseRequest(id, setDeleteLeaseRequestLoading);
                  }}
                  text={"Delete Lease Request"}
                  colors={colors}
                  loading={deleteLeaseRequestLoading}
                />
              </>
            )}

          {leaseInformation[0].tenantid > 0 && userType === "O" && (
            <PropertyMenuButton
              onPress={() => {
                navigation.navigate("Terminate Lease", { propertyID: id });
              }}
              text={"Terminate Lease"}
              colors={colors}
            />
          )}

          {/* manager related below */}
          {!buttons[0].managerOffers &&
            !managerContract[0].managerid &&
            userType === "O" && (
              <PropertyMenuButton
                onPress={() => {
                  navigation.navigate("Hire Manager Request Form", {
                    propertyID: id,
                  });
                }}
                text={"Generate Manager Request"}
                colors={colors}
              />
            )}

          {buttons[0].managerOffers && userType === "O" && (
            <PropertyMenuButton
              text={`Manager Offers`}
              colors={colors}
              onPress={() =>
                navigation.navigate("Manager Offers", { propertyID: id })
              }
            />
          )}

          {buttons[0].managerOffers && userType === "O" && (
            <PropertyMenuButton
              doesNotOpenScreen={true}
              loading={deleteHireRequestLoading}
              onPress={async () => {
                await deleteHireRequest(id, setDeleteHireRequestLoading);
                fetchData();
              }}
              text={"Delete Hire Request"}
              colors={colors}
            />
          )}

          {managerContract[0].managerid > 0 && userType === "O" && (
            <PropertyMenuButton
              doesNotOpenScreen={true}
              loading={fireManagerLoading}
              onPress={async () => {
                await fireManager(id, setFireManagerLoading);
                fetchData();
              }}
              text={"Fire Manager"}
              colors={colors}
            />
          )}

          {/* rent related below */}

          {userType === "T" && (
            <>
              {/* only for tenant */}
              {buttons[0].submitRentCollectionRequest && (
                <PropertyMenuButton
                  doesNotOpenScreen={true}
                  loading={sendRentCollectionRequestLoading}
                  text={"Send Rent Collection Request"}
                  colors={colors}
                  onPress={async () => {
                    await sendRentCollectionRequest(
                      id,
                      userID,
                      setSendRentCollectionRequestLoading
                    );
                    fetchData();
                  }}
                />
              )}

              {/* only for tenant*/}
              {buttons[0].submitVerificationRequest && (
                <PropertyMenuButton
                  text={"Send Online Rent Verification Request"}
                  colors={colors}
                  onPress={() =>
                    navigation.navigate(
                      "Send Online Rent Verification Request",
                      {
                        propertyID: id,
                      }
                    )
                  }
                />
              )}
            </>
          )}

          {userType === "M" && (
            <>
              {/* only for manager */}
              {buttons[0].submitVerificationRequest && (
                <PropertyMenuButton
                  text={"Send Online Rent Verification Request"}
                  colors={colors}
                  onPress={() =>
                    navigation.navigate(
                      "Send Online Rent Verification Request",
                      {
                        propertyID: id,
                      }
                    )
                  }
                />
              )}

              {/* only for manager */}
              {buttons[0].verifyOnlineRent && (
                <PropertyMenuButton
                  text={"Verify Online Payment"}
                  colors={colors}
                  onPress={() =>
                    navigation.navigate("Verify Online Payment", {
                      propertyID: id,
                      rentAmount: leaseInformation[0].rent,
                    })
                  }
                />
              )}

              {/* only for manager */}
              {buttons[0].collectRent && (
                <PropertyMenuButton
                  text={"Collect Rent"}
                  colors={colors}
                  onPress={() =>
                    navigation.navigate("Collect Rent", {
                      propertyID: id,
                      rentAmount: leaseInformation[0].rent,
                    })
                  }
                />
              )}
            </>
          )}

          {userType === "O" && (
            <>
              {/* only for owner */}
              {buttons[0].verifyOnlineRent && (
                <PropertyMenuButton
                  text={"Verify Online Payment"}
                  colors={colors}
                  onPress={() =>
                    navigation.navigate("Verify Online Payment", {
                      propertyID: id,
                      rentAmount: leaseInformation[0].rent,
                      salaryFixed: managerContract[0]?.salaryfixed,
                      salaryPercentage: managerContract[0]?.salarypercentage,
                    })
                  }
                />
              )}

              {/* only for owner */}
              {buttons[0].collectRent && (
                <PropertyMenuButton
                  text={"Collect Rent"}
                  colors={colors}
                  onPress={() =>
                    navigation.navigate("Collect Rent", {
                      propertyID: id,
                      rentAmount: leaseInformation[0].rent,
                      salaryFixed: managerContract[0]?.salaryfixed,
                      salaryPercentage: managerContract[0]?.salarypercentage,
                    })
                  }
                />
              )}
            </>
          )}

          {/* not implemented below */}

          {/* <PropertyMenuButton text={"Eviction Notice"} colors={colors} /> */}
          {/* <PropertyMenuButton
            text={"Rate Manager /Tenant"}
            colors={colors}
            onPress={() => navigation.navigate("Rating Screen")}
          /> */}
          <PropertyMenuButton
            text={"Rent History"}
            colors={colors}
            onPress={() =>
              navigation.navigate("Rent History", { propertyID: id })
            }
          />

          {userType === "O" && (
            <PropertyMenuButton
              text={"Delete Property"}
              colors={colors}
              onPress={async () => {
                await deleteProperty(id, setDeletePropertyLoading);
                navigation.goBack();
              }}
              loading={deletePropertyLoading}
            />
          )}

          {/* submit picture (most probably remove) */}
          {/* <PropertyMenuButton
            onPress={() => {
              navigation.navigate("Verify Documentation");
            }}
            text={"Submit Picture of Proof"}
            colors={colors}
          /> */}
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
