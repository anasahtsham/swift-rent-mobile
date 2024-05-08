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
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BASE_URL, OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { viewComplainSchema } from "../../../../helpers/validation/ViewComplainValidation";
import ViewComplainHeader from "../../headers/ViewComplainHeader";
import InputField from "../../input_fields/InputField";

const ViewComplain = ({ route }) => {
  const {
    complaintID,
    fullAddress,
    senderName,
    senderType,
    createdOn,
    complaintTitle,
    complaintDescription,
  } = route.params;
  const colors = useColors();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

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
      validationSchema={viewComplainSchema}
      onSubmit={(values) => {
        setLoading(true);
        axios
          .post(`${BASE_URL}/api/common/respond-to-complaint`, {
            complaintID: complaintID,
            remarkText: values.remarks,
          })
          .then(() => {
            Alert.alert("Success", "Complaint acknowledged successfully");
            navigation.pop(2);
          })
          .catch((error) => {
            Alert.alert("Error", "Something went wrong");
            console.log(JSON.stringify(error.response, null, 2));
          })
          .finally(() => {
            setLoading(false);
          });
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
          }}
          style={{
            backgroundColor: colors.bodyBackground,
          }}
        >
          <ViewComplainHeader
            fullAddress={fullAddress}
            senderName={senderName}
            senderType={senderType}
            createdOn={createdOn}
            colors={colors}
          />

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
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.small,
                    fontFamily: "OpenSansBold",
                  },
                ]}
              >
                Complain:{" "}
              </Text>
              <Text
                style={[
                  { color: colors.textPrimary, fontSize: FontSizes.small },
                ]}
              >
                {complaintTitle}
              </Text>
            </View>
            {!!complaintDescription && (
              <Text
                style={[
                  {
                    color: colors.textPrimary,
                    fontSize: FontSizes.small,
                  },
                ]}
              >
                {complaintDescription}
              </Text>
            )}

            <View style={{ marginTop: 20 }} />

            <InputField
              borderRadius={10}
              label={"Reply to Complaint"}
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
                marginTop: 150,
              },
            ]}
          >
            <TouchableOpacity
              activeOpacity={OPACITY_VALUE_FOR_BUTTON}
              style={[styles.button, { borderColor: colors.borderBlue }]}
              onPress={handleSubmit}
            >
              {loading && (
                <ActivityIndicator size="small" color={colors.textPrimary} />
              )}
              {!loading && (
                <Text
                  style={[
                    styles.fontBold,
                    { color: colors.textPrimary, fontSize: FontSizes.small },
                  ]}
                >
                  Acknowledge
                </Text>
              )}
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
    padding: 10,
    alignSelf: "center",
    width: "90%",
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
    left: 0,
    right: 0,
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ViewComplain;
