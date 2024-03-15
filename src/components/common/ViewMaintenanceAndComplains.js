import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import {
  complaintsData,
  complaintsHeaderData,
  maintenanceData,
  maintenanceHeaderData,
} from "../../helpers/data/MaintenanceAndComplainsData";
import ViewMaintenanceAndComplainsHeader from "./header/ViewMaintenanceAndComplainsHeader";

const ViewMaintenanceAndComplains = ({ route, ...props }) => {
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
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      scrollEnabled={true}
      style={{ backgroundColor: colors.bodyBackground }}
    >
      <ViewMaintenanceAndComplainsHeader
        colors={colors}
        headerTitle={headerTitle}
        headerData={headerData}
      />
      <View
        style={[
          styles.requestCard,
          { backgroundColor: colors.backgroundPrimary },
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
            { color: colors.textPrimary, fontSize: FontSizes.small },
          ]}
        >
          {headerTitle === "Maintenance Request"
            ? maintenanceData.description
            : complaintsData.description}
        </Text>
        <TextInput
          style={[
            styles.remarksBox,
            {
              borderColor: colors.borderPrimary,
              paddingLeft: 10,
              color: colors.textPrimary,
              fontSize: FontSizes.small,
            },
          ]}
          placeholder={
            headerTitle === "Maintenance Request"
              ? "Add Remarks"
              : "Reply to Complain"
          }
          placeholderTextColor={colors.textGrey}
        />
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
            activeOpacity={opacityValueForButton}
            style={[styles.button, { borderColor: colors.borderGreen }]}
            onPress={() => {
              navigation.navigate("View Maintenance And Complains", {
                headerTitle: headerTitle,
              });
            }}
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
              navigation.navigate("View Maintenance And Complains", {
                headerTitle: headerTitle,
              });
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
            activeOpacity={opacityValueForButton}
            style={[styles.button, { borderColor: colors.borderGreen }]}
            onPress={() => {
              navigation.navigate("View Maintenance And Complains", {
                headerTitle: headerTitle,
              });
            }}
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
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },

  requestCard: {
    marginTop: "5%",
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
