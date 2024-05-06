import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL, opacityValueForButton } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import { formatNumberToCrore } from "../../helpers/utils";
import { viewMaintenanceAndComplainsSchema } from "../../helpers/validation/ViewMaintenanceAndComplainsValidation";
import RentalRequestAgreementFormHeader from "../common/headers/RentalRequestAgreementFormHeader";
import InputField from "../common/input_fields/InputField";

const RentalRequestAgreementForm = ({ route }) => {
  const { propertyLeaseID, leaseID } = route.params;
  const colors = useColors();
  const navigation = useNavigation();

  const [rent, setRent] = useState(0);
  const [security, setSecurity] = useState(0);
  const [advancePayment, setAdvancePayment] = useState(0);
  const [advancePaymentForMonths, setAdvancePaymentForMonths] = useState(0);
  const [lateRentFine, setLateRentFine] = useState(0);
  const [address, setAddress] = useState("");
  const [registrarName, setRegistrarName] = useState("");
  const [registrarType, setRegistrarType] = useState("");
  const [leaseStartDate, setLeaseStartDate] = useState("");
  const [leasedForMonths, setLeasedForMonths] = useState(0);
  const [incrementPeriod, setIncrementPeriod] = useState(0);
  const [incrementPercentage, setIncrementPercentage] = useState(0);
  const [dueDate, setDueDate] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaseRequestDetails = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/api/tenant/lease-request-detail`,
          { propertyLeaseID: propertyLeaseID }
        );
        const details = response.data.leaseRequestDetails;
        setRent(details.rent);
        setSecurity(details.securitydeposit);
        setAdvancePayment(details.advancepayment);
        setAdvancePaymentForMonths(details.advancepaymentformonths);
        setLateRentFine(details.fine);
        setAddress(details.propertyaddress + ", " + details.fulladdress);
        setRegistrarName(details.registrarname);
        setRegistrarType(details.registrartype);
        setLeaseStartDate(details.leasestartdate);
        setLeasedForMonths(details.leasedformonths);
        setIncrementPeriod(details.incrementperiod);
        setIncrementPercentage(details.incrementpercentage);
        setDueDate(details.duedate);
      } catch (error) {
        Alert.alert("Error", "Network Error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaseRequestDetails();

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
    <Formik
      initialValues={{ remarks: "" }}
      validationSchema={viewMaintenanceAndComplainsSchema}
      onSubmit={() => {
        Alert.alert(
          "Confirmation",
          "Are you sure you want to accept this lease?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                axios
                  .post(`${BASE_URL}/api/tenant/lease-accept`, {
                    leaseID: leaseID,
                  })
                  .then((response) => {
                    if (response.data.success) {
                      Alert.alert("Success", "Lease accepted successfully");
                      navigation.pop(2);
                    } else {
                      Alert.alert("Error", response.data.error);
                    }
                  })
                  .catch((error) => {
                    Alert.alert("Error", error.message);
                  });
              },
            },
          ]
        );
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
          style={{
            backgroundColor: colors.bodyBackground,
          }}
        >
          <RentalRequestAgreementFormHeader
            colors={colors}
            address={address}
            registrarName={registrarName}
            registrarType={registrarType}
            leaseStartDate={leaseStartDate}
            leasedForMonths={leasedForMonths}
            incrementPeriod={incrementPeriod}
            incrementPercentage={incrementPercentage}
            dueDate={dueDate}
            loading={loading}
            setLoading={setLoading}
          />
          <View
            style={[
              styles.requestCard,
              { backgroundColor: colors.backgroundPrimary, marginTop: 20 },
            ]}
          >
            {loading && (
              <ActivityIndicator size="large" color={colors.textPrimary} />
            )}
            {!loading && (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={[
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                        flexWrap: "wrap",
                      },
                    ]}
                  >
                    Rent:{" "}
                  </Text>
                  <Text
                    style={[
                      styles.fontBold,
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                        flexWrap: "wrap",
                      },
                    ]}
                  >
                    {`${formatNumberToCrore(rent)} PKR`}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <Text
                    style={[
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                        flexWrap: "wrap",
                      },
                    ]}
                  >
                    Security:{" "}
                  </Text>
                  <Text
                    style={[
                      styles.fontBold,
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                        flexWrap: "wrap",
                      },
                    ]}
                  >
                    {`${formatNumberToCrore(security)} PKR`}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <Text
                    style={[
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                        flexWrap: "wrap",
                      },
                    ]}
                  >
                    Advance Payment:{" "}
                  </Text>
                  <Text
                    style={[
                      styles.fontBold,
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                        flexWrap: "wrap",
                      },
                    ]}
                  >
                    {`${formatNumberToCrore(advancePayment)} PKR (${
                      advancePaymentForMonths || 0
                    } months)`}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 20,
                    flexWrap: "wrap",
                  }}
                >
                  <Text
                    style={[
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                        flexWrap: "wrap",
                      },
                    ]}
                  >
                    Late Rent Fine:{" "}
                  </Text>
                  <Text
                    style={[
                      styles.fontBold,
                      {
                        color: colors.textPrimary,
                        fontSize: FontSizes.small,
                        flexWrap: "wrap",
                      },
                    ]}
                  >
                    {`${formatNumberToCrore(lateRentFine)} PKR`}
                  </Text>
                </View>
              </>
            )}
            <InputField
              borderRadius={10}
              label={"Reason (Fill if you want to reject)"}
              onChangeText={handleChange("remarks")}
              handleBlur={handleBlur("remarks")}
              value={values.remarks}
              errorText={touched.remarks ? errors.remarks : ""}
            />
          </View>

          <View
            style={[
              styles.footer,
              {
                backgroundColor: colors.headerAndFooterBackground,
                marginTop: 20,
              },
            ]}
          >
            <TouchableOpacity
              activeOpacity={opacityValueForButton}
              style={[styles.button, { borderColor: colors.borderGreen }]}
              onPress={handleSubmit}
            >
              <Text
                style={[
                  styles.fontBold,
                  { color: colors.textPrimary, fontSize: FontSizes.small },
                ]}
              >
                Accept
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={opacityValueForButton}
              style={[styles.button, { borderColor: colors.borderRed }]}
              onPress={() => {
                if (values.remarks === "") {
                  Alert.alert(
                    "Please fill the remarks field",
                    "Remarks is required"
                  );
                } else {
                  Alert.alert(
                    "Confirmation",
                    "Are you sure you want to reject this lease?",
                    [
                      {
                        text: "Cancel",
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => {
                          axios
                            .post(`${BASE_URL}/api/tenant/lease-reject`, {
                              leaseID: leaseID,
                              reasonForRejection: values.remarks,
                            })
                            .then((response) => {
                              Alert.alert(
                                "Rejected",
                                "Lease agreement was rejected"
                              );
                              navigation.pop(2);
                            })
                            .catch((error) => {
                              Alert.alert("Error", error.message);
                            });
                        },
                      },
                    ]
                  );
                }
              }}
            >
              <Text
                style={[
                  styles.fontBold,
                  { color: colors.textPrimary, fontSize: FontSizes.small },
                ]}
              >
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },

  requestCard: {
    borderRadius: 20,
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    padding: 10,
  },

  button: {
    borderRadius: 20,
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  footer: {
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
  },
});

export default RentalRequestAgreementForm;
