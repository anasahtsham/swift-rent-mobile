import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../helpers/ImageImports";
import { useColorsOnFocus } from "../../helpers/SetColors";

export default function Analytics({ navigation, route }) {
  const colors = useColorsOnFocus();
  const dummyData = [
    {
      id: "1",
      month: "March, 23",
      incomingPayment: "27,000",
      outgoingPayment: "1000",
    },
    {
      id: "2",
      month: "April, 2",
      incomingPayment: "27,000",
      outgoingPayment: "1000",
    },
    {
      id: "3",
      month: "May, 21",
      incomingPayment: "27,000",
      outgoingPayment: "1000",
    },
    {
      id: "4",
      month: "June, 3",
      incomingPayment: "27,000",
      outgoingPayment: "1000",
    },
    {
      id: "5",
      month: "July, 16",
      incomingPayment: "27,000",
      outgoingPayment: "1000",
    },
    {
      id: "6",
      month: "August, 19",
      incomingPayment: "27,000",
      outgoingPayment: "1000",
    },
    {
      id: "7",
      month: "September, 10",
      incomingPayment: "27,000",
      outgoingPayment: "1000",
    },
    {
      id: "8",
      month: "October, 31",
      incomingPayment: "27,000",
      outgoingPayment: "1000",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.boldText}>
        <Text style={styles.boldText}>{item.month}</Text>
        <View style={styles.row}>
          <Image
            tintColor={colors.iconRed}
            source={icons.downLongArrow}
            style={styles.outgoingFlatListArrowIcon}
          />
          <Text style={styles.paymentText}>{item.incomingPayment}</Text>
        </View>
        <View style={styles.row}>
          <Image
            tintColor={colors.iconGreen}
            source={icons.upLongArrow}
            style={styles.outgoingFlatListArrowIcon}
          />
          <Text style={styles.paymentText}>{item.outgoingPayment}</Text>
        </View>
        <Image
          source={icons.outgoingArrow}
          style={styles.outgoingFlatListArrowIcon}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.bigCardContainer}>
          <View style={styles.bigCard}>
            <Text style={styles.cardHeadingText}>September 2024</Text>
            <Text style={styles.cardSubheadingText}>Rents Collected</Text>
            <View style={{ flexDirection: "row" }}>
              <Image source={icons.downLongArrow} style={styles.bigCardIcons} />
              <Text style={styles.cardDynamicDataText}>117,000</Text>
              <Text style={[styles.cardDynamicDataText, styles.currencyText]}>
                PKR
              </Text>
            </View>
            <Text style={styles.cardSubheadingText}>Maintenance Costs</Text>
            <View style={{ flexDirection: "row" }}>
              <Image source={icons.upLongArrow} style={styles.bigCardIcons} />
              <Text style={styles.cardDynamicDataText}>11,000</Text>
              <Text style={[styles.cardDynamicDataText, styles.currencyText]}>
                PKR
              </Text>
            </View>
            <Text style={styles.cardSubheadingText}>Total Properties</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.cardDynamicDataText}>25</Text>
              <Image
                source={icons.outgoingArrow}
                style={[styles.outgoingArrowIcons, { marginTop: 0 }]}
              />
            </View>
          </View>
        </View>
        <View style={styles.smallCardContainer}>
          <View style={styles.smallCard}>
            <Text style={styles.smallCardHeadingText}>Received{"\n"}Rents</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.smallCardDynamicDataText}>15</Text>
              <Image
                source={icons.outgoingArrow}
                style={styles.outgoingArrowIcons}
              />
            </View>
          </View>
          <View style={styles.smallCard}>
            <Text style={styles.smallCardHeadingText}>Pending {"\n"}Rents</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={[styles.smallCardDynamicDataText, { color: "#ff0c0c" }]}
              >
                5
              </Text>
              <Image
                source={icons.outgoingArrow}
                style={styles.outgoingArrowIcons}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.monthlyReportsText}>Monthly Reports</Text>
      </View>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.bottomContainer}
      />
      <View style={{ height: 60 }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#47b5ff",
    position: "relative",
  },

  //-----------------> Big Card Styles
  topContainer: {
    flex: 0.65,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    position: "relative",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  bigCardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bigCard: {
    width: "90%",
    height: "85%",
    paddingVertical: 25,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#1463df",
    borderWidth: 4,
  },

  bigCardIcons: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: -15,
  },
  bigCardOutgoingArrowIcons: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  currencyText: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 12,
  },

  // ---------------> Small Card Styles
  smallCardContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  smallCard: {
    width: "90%",
    height: "38%",
    paddingVertical: 25,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#1463df",
    borderWidth: 4,
  },
  smallCardHeadingText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: -20,
    textAlign: "left",
    paddingLeft: 4,
  },

  smallCardDynamicDataText: {
    fontSize: 28,
    textAlign: "left",
    paddingLeft: 5,
    color: "#00bf63",
  },

  // ---------------> Common to big and small card styles
  cardHeadingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -20,
    textAlign: "center",
    paddingBottom: 15,
  },
  cardSubheadingText: {
    fontSize: 16,
    textAlign: "left",
    paddingLeft: 10,
    paddingBottom: 5,
  },
  cardDynamicDataText: {
    fontSize: 18,
    textAlign: "left",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingBottom: 3,
  },

  outgoingArrowIcons: {
    width: 30,
    height: 30,
    marginTop: 10,
  },

  // -------------------->middle container styling
  monthlyReportsText: {
    fontSize: 28,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
  },
  middleContainer: {
    flex: 0.15,
    justifyContent: "flex-start",
    alignItems: "flex-start", // Change this line
    backgroundColor: "#47b5ff",
    position: "relative",
  },
  bottomContainer: {
    flex: 0.1,
  },

  // -------------->FlatList styles below
  item: {
    padding: 20,
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: "column",
  },
  boldText: {
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 18,
  },
  outgoingFlatListArrowIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentText: {
    fontSize: 16,
  },
});
