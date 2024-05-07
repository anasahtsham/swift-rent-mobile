import { useEffect, useState } from "react";
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
  borderBlue,
  borderRed,
} from "../../../../assets/themes/DarkColorScheme";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { receivedRentsData } from "../../../../helpers/data/RentsData";
import ComplainsCard from "../../cards/ComplainsCard";

const Complains = ({ navigation }) => {
  const colors = useColors();

  const [header, setHeader] = useState("Sent Complains");

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
    <ComplainsCard
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
        data={receivedRentsData}
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
          style={[styles.button, { borderColor: borderBlue }]}
          onPress={() => {
            setHeader("Sent Complains");
          }}
        >
          <Text
            style={[
              header === "Sent Complains"
                ? styles.fontBold
                : styles.fontRegular,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            Sent Complains
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
          style={[styles.button, { borderColor: borderRed }]}
          onPress={() => {
            setHeader("Recieved Complains");
          }}
        >
          <Text
            style={[
              header === "Recieved Complains"
                ? styles.fontBold
                : styles.fontRegular,
              { color: colors.textPrimary, fontSize: FontSizes.small },
            ]}
          >
            Recieved Complains
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
