import React, { useEffect } from "react";
import {
  BackHandler,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const OwnerAnalyticalReport = ({ navigation }) => {
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
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topCard}>
          <View style={styles.topCardTopTextContainer}>
            <View style={styles.rightInRow}>
              <Text style={styles.topCardTopText}>Total Revenue</Text>
              <Text style={styles.nestedText}>+20,000</Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={styles.topCardTopText}>Maintenance Costs</Text>
              <Text style={styles.nestedText}>+20,000</Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={styles.topCardTopText}>Total Profit</Text>
              <Text style={styles.nestedText}>+20,000</Text>
            </View>
          </View>
          <View style={styles.topCardRowEnd}>
            <Text style={styles.monthNameText}>Month Name</Text>
            <Image
              styles={{ height: 20, width: 20 }}
              src="../../assets/icons/down-long-arrow.png"
              alt="Arrow Right"
            />
            <Text style={styles.monthNameTextNested}>117,000</Text>
            <Image
              styles={{ height: 20, width: 20 }}
              src="../../assets/icons/down-long-arrow.png"
              alt="Arrow Right"
            />
            <Text style={styles.monthNameTextNested}>11,000</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.card}>
          <Text style={styles.cardMainText}>Properties Status</Text>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Total Properties</Text>
            <Text style={[styles.cardFetchableData, { color: "black" }]}>
              5
            </Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Properties on Rent</Text>
            <Text style={[styles.cardFetchableData, { color: "green" }]}>
              4
            </Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Vacant Properties</Text>
            <Text style={[styles.cardFetchableData, { color: "red" }]}>1</Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Managed Properties</Text>
            <Text style={styles.cardFetchableData}>2</Text>
          </View>
        </Pressable>

        <Pressable style={styles.card}>
          <Text style={styles.cardMainText}>Maintenance</Text>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Total Requests</Text>
            <Text style={[styles.cardFetchableData, { color: "black" }]}>
              6
            </Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Accepted</Text>
            <Text style={[styles.cardFetchableData, { color: "green" }]}>
              4
            </Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Rejected</Text>
            <Text style={[styles.cardFetchableData, { color: "red" }]}>1</Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Pending</Text>
            <Text style={styles.cardFetchableData}>2</Text>
          </View>
        </Pressable>

        <Pressable style={styles.card}>
          <Text style={styles.cardMainText}>Complaints</Text>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Total Requests</Text>
            <Text style={[styles.cardFetchableData, { color: "black" }]}>
              5
            </Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={styles.cardSubText}>Resolved Requests</Text>
            <Text style={[styles.cardFetchableData, { color: "green" }]}>
              4
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#47b5ff",
  },
  topContainer: {
    flex: 0.35,
    position: "relative",
    backgroundColor: "white",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  topCard: {
    width: "95%",
    height: "92%",
    borderColor: "#1463df",
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: "white",
  },

  topCardTopTextContainer: {
    paddingTop: "2%",
  },
  topCardTopText: {
    fontSize: 12,
    paddingLeft: "4%",
    textAlign: "left",
  },

  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nestedText: {
    fontSize: 12,
    paddingLeft: "4%",
    textAlign: "left",
    marginRight: "15%",
  },

  monthNameText: {
    paddingTop: "1%",
    fontWeight: "bold",
    fontSize: 14,
  },
  monthNameTextNested: {
    fontWeight: "bold",
    fontSize: 20,
  },
  topCardRowEnd: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "38%",
    paddingLeft: "4%",
    paddingRight: "4%",
  },

  boldText: {
    fontWeight: "bold",
    marginRight: "5%",
  },

  bottomContainer: {
    flex: 0.65,
    width: "95%",
    height: "90%",
    marginTop: "5%",
    position: "relative",
    borderRadius: 20,
    alignSelf: "center",
  },
  card: {
    width: "auto",
    height: "34%",
    marginTop: "5%",
    borderRadius: 20,
    backgroundColor: "white",
  },

  cardMainText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: "4%",
  },
  cardSubText: {
    fontSize: 14,
    paddingLeft: "4%",
    paddingVertical: "0.5%",
  },
  cardFetchableData: {
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "30%",
  },
});

export default OwnerAnalyticalReport;
