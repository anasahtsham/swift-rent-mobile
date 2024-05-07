import { useEffect } from "react";
import {
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import {
  borderGreen,
  borderRed,
} from "../../../../assets/themes/DarkColorScheme";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import {
  pendingRentsData,
  receivedRentsData,
  rentsPaidData,
  rentsPendingData,
} from "../../../../helpers/data/RentsData";
import RentsButton from "../../buttons/RentsButton";

const Complains = ({ navigation, route }) => {
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

  const renderItem = ({ item: rent }) => (
    <RentsButton
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
  );

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
      <FlatList
        data={dataToBeRendered}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.buttons}
        ListFooterComponent={<View style={{ height: 10 }} />}
      />
      <View
        style={[
          styles.footer,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <TouchableOpacity
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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

export default Complains;
