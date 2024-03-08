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
export default function OwnerAnalytics({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.bigCardContainer}>
          <View style={styles.bigCard}>
            <Text style={styles.cardHeadingText}>September 2024</Text>
            <Text style={styles.cardSubheadingText}>Rents Collected</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.cardDynamicDataText}>117,000</Text>
              <Text style={[styles.cardDynamicDataText, styles.currencyText]}>
                PKR
              </Text>
            </View>
            <Text style={styles.cardSubheadingText}>Maintenance Costs</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.cardDynamicDataText}>11,000</Text>
              <Text style={[styles.cardDynamicDataText, styles.currencyText]}>
                PKR
              </Text>
            </View>
            <Text style={styles.cardSubheadingText}>Total Properties</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.cardDynamicDataText}>25</Text>
            </View>
          </View>
        </View>
        <View style={styles.smallCardContainer}>
          <View style={styles.smallCard}>
            <Text style={styles.smallCardHeadingText}>Received{"\n"}Rents</Text>

            <Text style={styles.smallCardDynamicDataText}>15</Text>
          </View>
          <View style={styles.smallCard}>
            <Text style={styles.smallCardHeadingText}>Pending {"\n"}Rents</Text>

            <Text
              style={[styles.smallCardDynamicDataText, { color: "#ff0c0c" }]}
            >
              5
            </Text>
          </View>
        </View>
      </View>
      {/* Rest of the screen */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#47b5ff",
    position: "relative",
  },
  topContainer: {
    flex: 0.35,
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
    paddingBottom: 3,
  },
  cardDynamicDataText: {
    fontSize: 18,
    textAlign: "left",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingBottom: 3,
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
    paddingLeft: 4,
    color: "#00bf63",
  },
  currencyText: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 12,
  },
});
