import AnalyticsButton from "./buttons/AnalyticsButton";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import AnalyticsHeader from "./header/AnalyticsHeader";
import { useColorsOnFocus } from "../../helpers/SetColors";
import { useNavigation } from "@react-navigation/native";
import { dummyData } from "../../helpers/AnalyticsData";
import * as FontSizes from "../../assets/fonts/FontSizes";

const Analytics = () => {
  const navigation = useNavigation();
  const colors = useColorsOnFocus();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <AnalyticsHeader />
      <View
        style={{ paddingTop: 20, paddingHorizontal: 20, paddingBottom: 10 }}
      >
        <Text
          style={{
            fontFamily: "OpenSansBold",
            fontSize: FontSizes.medium,
            color: colors.textWhite,
          }}
        >
          Monthly Reports
        </Text>
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          {dummyData.map((data) => (
            <AnalyticsButton
              key={data.id}
              month={data.month}
              income={data.incomingPayment}
              outcome={data.outgoingPayment}
              backgroundColor={colors.backgroundRed}
              navigation={navigation}
            />
          ))}
        </View>
        <View style={{ height: 70 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    alignSelf: "center",
    width: "90%",
  },
});

export default Analytics;
