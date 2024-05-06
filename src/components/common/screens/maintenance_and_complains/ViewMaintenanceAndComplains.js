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
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import {
  complaintsData,
  complaintsHeaderData,
  maintenanceData,
  maintenanceHeaderData,
} from "../../../../helpers/data/MaintenanceAndComplainsData";
import { viewMaintenanceAndComplainsSchema } from "../../../../helpers/validation/ViewMaintenanceAndComplainsValidation";
import ViewMaintenanceAndComplainsHeader from "../../headers/ViewMaintenanceAndComplainsHeader";
import InputField from "../../input_fields/InputField";

const ViewMaintenanceAndComplains = ({ route }) => {
  const colors = useColors();
  const navigation = useNavigation();
  const headerTitle = route.params.headerTitle;

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

  const headerData =
    headerTitle === "Maintenance Request"
      ? maintenanceHeaderData
      : complaintsHeaderData;

  return (
    <Formik
      initialValues={{ remarks: "" }}
      validationSchema={viewMaintenanceAndComplainsSchema}
      onSubmit={() => {}}
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
          <ViewMaintenanceAndComplainsHeader
            colors={colors}
            headerTitle={headerTitle}
            headerData={headerData}
          />
          <View
            style={[
              styles.requestCard,
              { backgroundColor: colors.backgroundPrimary, marginTop: 10 },
            ]}
          >
            <Text
              style={[
                styles.requestTile,
                { color: colors.textPrimary, fontSize: FontSizes.small },
              ]}
            >
              {headerTitle === "Maintenance Request"
                ? maintenanceData.title
                : complaintsData.title}
            </Text>
            <Text
              style={[
                styles.requestDescription,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                  marginBottom: 20,
                },
              ]}
            >
              {headerTitle === "Maintenance Request"
                ? maintenanceData.description
                : complaintsData.description}
            </Text>
            <View style={{ width: "90%", alignSelf: "center", height: 65 }}>
              <InputField
                borderRadius={10}
                label={
                  headerTitle === "Maintenance Request"
                    ? "Add Remarks"
                    : "Reply to Complain"
                }
                onChangeText={handleChange("remarks")}
                handleBlur={handleBlur("remarks")}
                value={values.remarks}
                errorText={touched.remarks ? errors.remarks : ""}
              />
            </View>
          </View>

          {headerTitle === "Maintenance Request" && (
            <View
              style={[
                styles.footer,
                {
                  backgroundColor: colors.headerAndFooterBackground,
                  marginTop: 150,
                },
              ]}
            >
              <TouchableOpacity
                activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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
                activeOpacity={OPACITY_VALUE_FOR_BUTTON}
                style={[styles.button, { borderColor: colors.borderRed }]}
                onPress={handleSubmit}
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
          )}

          {headerTitle === "Complain" && (
            <View
              style={[
                styles.footer,
                {
                  backgroundColor: colors.headerAndFooterBackground,
                  marginTop: 150,
                },
              ]}
            >
              <TouchableOpacity
                activeOpacity={OPACITY_VALUE_FOR_BUTTON}
                style={[styles.button, { borderColor: colors.borderGreen }]}
                onPress={handleSubmit}
              >
                <Text
                  style={[
                    styles.fontBold,
                    { color: colors.textPrimary, fontSize: FontSizes.small },
                  ]}
                >
                  Send Response
                </Text>
              </TouchableOpacity>
            </View>
          )}
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
    paddingBottom: 10,
  },

  requestTile: {
    fontSize: FontSizes.small,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 8,
  },

  requestDescription: {
    marginHorizontal: 20,
  },
  remarksBox: {
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    padding: 4,
    borderRadius: 10,
  },

  container: {
    flex: 1,
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

export default ViewMaintenanceAndComplains;
