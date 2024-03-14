import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../constants";
import { useColors } from "./../../helpers/SetColors";
import ViewComplainsHeader from "./header/ViewComplainsHeader";
import InputField from "./input_fields/InputField";

const ViewComplains = (props) => {
  const colors = useColors();
  const navigation = useNavigation();

  let firstButtonText = " Send Response";

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
    <SafeAreaView style={{ backgroundColor: colors.bodyBackground, flex: 1 }}>
      <ViewComplainsHeader colors={colors} />
      <View
        style={[
          styles.bottomContainer,
          { backgroundColor: colors.bodyBackground },
        ]}
      >
        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[
            styles.requestCard,
            { backgroundColor: colors.backgroundPrimary },
          ]}
        >
          <Text style={[styles.requestTile, { color: colors.textPrimary }]}>
            Neighbors causing trouble
          </Text>
          <Text
            style={[styles.requestDescription, { color: colors.textPrimary }]}
          >
            My neighbors are making alot of un-necessary noise at all times, no
            matter if it is day time or night time. Please resolve this issue.
          </Text>
          <TextInput
            style={[
              styles.remarksBox,
              {
                borderColor: colors.borderPrimary,
                paddingLeft: 10,
                color: colors.textPrimary,
              },
            ]}
            placeholder="Reply to Complain"
            placeholderTextColor={colors.textPrimary}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.footer,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { borderColor: colors.borderGreen }]}
          onPress={() => {
            navigation.navigate("Rents", { header: "Received Rents" });
          }}
        >
          <Text
            style={[
              styles.fontBold,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            {firstButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    position: "absolute", // remove this line when un commenting marginTop:260
    marginTop: 260, // This keeps the footer at the bottom even when the keyboard is open and stays behind the keyboard
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

export default ViewComplains;
