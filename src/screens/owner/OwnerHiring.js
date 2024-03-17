import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OwnerHiring = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.managerProfileCard}>
          <Text style={styles.managerProfileCardMainText}>
            Manager's{"\n"}Name
          </Text>
          <View style={styles.managerProfileCardSub}>
            <Text style={styles.managerProfileCardSubText}>phone number</Text>
            <Text style={styles.managerProfileCardSubText}>
              manager@email.com
            </Text>
            <View style={styles.rightInRow}>
              <Text style={styles.managerProfileCardSubText}>
                Managing Since
              </Text>
              <Text style={styles.boldText}>15-07-2021</Text>
            </View>
            <View style={styles.rightInRow}>
              <Text style={styles.managerProfileCardSubText}>
                Properties Managed
              </Text>
              <Text style={styles.boldTextWithMargin}>13</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        {/* <Image src="../../assets/icons/userIcon.png" alt="Manager's Image" /> */}
        <Text style={[styles.hiringCardMainText, styles.boldText]}>
          Hiring ( Purpose? )
        </Text>
        <View style={styles.hiringCardSub}>
          <View style={styles.rightInRow}>
            <Text style={[styles.hiringSubText, styles.boldText]}>
              Salary Type:
            </Text>
            <Text style={styles.hiringSubText}>OneTime/SalaryComssion</Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={[styles.hiringSubText, styles.boldText]}>
              Salary Period:
            </Text>
            <Text style={styles.hiringSubText}>Weekly/Monthly</Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={[styles.hiringSubText, styles.boldText]}>
              My Offer:
            </Text>
            <Text style={styles.hiringSubText}>10,000/10%</Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={[styles.hiringSubText, styles.boldText]}>
              Manager's Offer:
            </Text>
            <Text style={styles.hiringSubText}>21,000/21%</Text>
          </View>
          <View style={styles.rightInRow}>
            <Text style={[styles.hiringSubText, styles.boldText]}>
              Maneger's Comment:
            </Text>
            <Text style={styles.hiringSubText}>
              Yar kraya day mujhay aa kay
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#47b5ff",
  },
  topContainer: {
    flex: 0.28,
    position: "relative",
    backgroundColor: "white",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  managerProfileCard: {
    width: "95%",
    height: "90%",
    borderColor: "#1463df",
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: "white",
  },
  managerProfileCardMainText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: "25%",
    paddingTop: "4%",
    textAlign: "left",
  },
  managerProfileCardSub: {
    fontWeight: "bold",
    paddingLeft: "4%",
    paddingTop: "4%",
    textAlign: "left",
  },
  managerProfileCardSubText: {
    fontSize: 14,
  },
  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  boldText: {
    fontWeight: "bold",
    marginRight: "5%",
  },
  boldTextWithMargin: {
    fontWeight: "bold",
    marginRight: "22%",
  },

  middleContainer: {
    flex: 0.25,
    width: "90%",
    height: "90%",
    marginTop: "5%",
    backgroundColor: "white",
    position: "relative",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  bottomContainer: {
    flex: 0.47,
    marginTop: "5%",
    position: "relative",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  hiringCardMainText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: -50,
    marginBottom: 10,
  },

  hiringCardSub: {
    paddingTop: "1%",
    paddingLeft: "5%",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  hiringSubText: {
    fontSize: 12,
  },
  hiringCardSubTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default OwnerHiring;
