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
import { viewMaintenanceAndComplainsSchema } from "../../../../helpers/validation/ViewMaintenanceAndComplainsValidation";
import ViewComplainHeader from "../../headers/ViewComplainHeader";
import InputField from "../../input_fields/InputField";

const ViewComplain = () => {
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
          }}
          style={{
            backgroundColor: colors.bodyBackground,
          }}
        >
          <ViewComplainHeader colors={colors} />

          <View
            style={[
              styles.requestCard,
              {
                backgroundColor: colors.backgroundPrimary,
                marginTop: 10,
                marginBottom: 100,
              },
            ]}
          >
            <Text
              style={[
                styles.requestTile,
                { color: colors.textPrimary, fontSize: FontSizes.small },
              ]}
            >
              Neighbors causing trouble
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
              Neigbours are being very loud and annoying
            </Text>
            <View style={{ width: "90%", alignSelf: "center", height: 65 }}>
              <InputField
                borderRadius={10}
                label={"Reply to Complaint"}
                onChangeText={handleChange("remarks")}
                handleBlur={handleBlur("remarks")}
                value={values.remarks}
                errorText={touched.remarks ? errors.remarks : ""}
              />
            </View>
          </View>

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
              style={[styles.button, { borderColor: colors.borderBlue }]}
              onPress={handleSubmit}
            >
              <Text
                style={[
                  styles.fontBold,
                  { color: colors.textPrimary, fontSize: FontSizes.small },
                ]}
              >
                Acknowledge
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
    position: "absolute",
    bottom: 0,
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
  },
});

export default ViewComplain;
