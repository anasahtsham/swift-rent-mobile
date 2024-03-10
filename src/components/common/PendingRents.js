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
} from "../../assets/colorScheme/darkColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../constants";
import { pendingRentsData } from "./../../helpers/PendingRentsData";
import PendingRentsButton from "./buttons/PendingRentsButton";

const PendingRents = ({ navigation }) => {
  const colors = useColors();

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
          Pending Rents
        </Text>
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          {pendingRentsData.map((rent) => (
            <PendingRentsButton
              colors={colors}
              key={rent.id}
              address={rent.address}
              city={rent.city}
              manager={rent.manager}
              tenant={rent.tenant}
              rentDue={rent.rentDue}
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
            navigation.navigate("Received Rents");
          }}
        >
          <Text
            style={[
              styles.fontRegular,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            Received Rents
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { borderColor: borderRed }]}
          onPress={() => {
            navigation.navigate("Pending Rents");
          }}
        >
          <Text
            style={[
              styles.fontBold,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            Pending Rents
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

export default PendingRents;
