import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useColors } from "../../helpers/SetColors";

import { useEffect } from "react";
import {
  borderGreen,
  borderRed,
} from "../../assets/color_scheme/DarkColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../constants";
import {
  pendingRentsData,
  receivedRentsData,
  rentsPaidData,
  rentsPendingData,
} from "../../helpers/data/RentsData";
import ReceivedRentsButton from "./buttons/ReceivedRentsButton";

const Rents = ({ navigation, route }) => {
  const colors = useColors();
  const { header } = route.params;

  let firstButtonText = "";
  let secondButtonText = "";
  let dataToBeRendered = [];

  if (header === "Received Rents" || header === "Pending Rents") {
    firstButtonText = "Received Rents";
    secondButtonText = "Pending Rents";
  } else {
    firstButtonText = "Rents Paid";
    secondButtonText = "Rents Pending";
  }

  if (header === "Received Rents") {
    dataToBeRendered = receivedRentsData;
  }
  if (header === "Pending Rents") {
    dataToBeRendered = pendingRentsData;
  }
  if (header === "Rents Paid") {
    dataToBeRendered = rentsPaidData;
  }
  if (header === "Rents Pending") {
    dataToBeRendered = rentsPendingData;
  }

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
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <View
        style={{ paddingTop: 20, paddingHorizontal: 20, paddingBottom: 10 }}
      >
        <Text
          style={[
            styles.fontBold,
            {
              fontSize: FontSizes.medium,
              color: colors.textWhite,
            },
          ]}
        >
          {header}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          {dataToBeRendered.map((rent) => (
            <ReceivedRentsButton
              colors={colors}
              key={rent.id}
              address={rent.address}
              city={rent.city}
              manager={rent.manager}
              tenant={rent.tenant}
              amountCollected={rent.amountCollected}
              rentPaid={rent.rentPaid}
              rentAmount={rent.rentAmount}
            />
          ))}
        </View>
        <View style={{ height: 10 }}></View>
      </ScrollView>
      <View
        style={[
          styles.footer,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { borderColor: borderGreen }]}
          onPress={() => {
            if (header === "Received Rents" || header === "Pending Rents") {
              navigation.navigate("Rents", { header: "Received Rents" });
            } else {
              navigation.navigate("Rents", { header: "Rents Paid" });
            }
          }}
        >
          <Text
            style={[
              header === "Received Rents" || header === "Rents Paid"
                ? styles.fontBold
                : styles.fontRegular,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            {firstButtonText}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { borderColor: borderRed }]}
          onPress={() => {
            if (header === "Received Rents" || header === "Pending Rents") {
              navigation.navigate("Rents", { header: "Pending Rents" });
            } else {
              navigation.navigate("Rents", { header: "Rents Pending" });
            }
          }}
        >
          <Text
            style={[
              header === "Pending Rents" || header === "Rents Pending"
                ? styles.fontBold
                : styles.fontRegular,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            {secondButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  container: {
    flex: 1,
  },
  buttons: {
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
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default Rents;
