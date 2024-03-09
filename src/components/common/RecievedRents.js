import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useColors } from "../../helpers/SetColors";

import {
  borderGreen,
  borderRed,
} from "../../assets/colorScheme/darkColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../constants";
import { receivedRentsData } from "../../helpers/ReceivedRentsData";
import ReceivedRentsButton from "./buttons/ReceivedRentsButton";

const RecievedRents = () => {
  const colors = useColors();

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
          Received Rents
        </Text>
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          {receivedRentsData.map((rent) => (
            <ReceivedRentsButton
              colors={colors}
              key={rent.id}
              address={rent.address}
              city={rent.city}
              manager={rent.manager}
              tenant={rent.tenant}
              amountCollected={rent.amountCollected}
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
        >
          <Text
            style={[
              styles.fontBold,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            Received Rents
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={opacityValueForButton}
          style={[styles.button, { borderColor: borderRed }]}
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

export default RecievedRents;
