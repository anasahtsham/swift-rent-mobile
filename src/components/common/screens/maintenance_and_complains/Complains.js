import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
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
import { BASE_URL, OPACITY_VALUE_FOR_BUTTON } from "../../../../constants";
import { useColors } from "../../../../helpers/SetColors";
import { useUserID } from "../../../../helpers/SetUserID";
import { useUserType } from "../../../../helpers/SetUserType";
import ComplainsCard from "../../cards/ComplainsCard";

const Complains = ({ navigation }) => {
  const userID = useUserID();
  const userType = useUserType();
  const colors = useColors();
  const [loading, setLoading] = useState(true);

  const [header, setHeader] = useState("Sent Complains");
  const [sentComplaints, setSentComplaints] = useState([]);
  const [receivedComplaints, setReceivedComplaints] = useState([]);

  const [dataToRender, setDataToRender] = useState(sentComplaints);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);

      axios
        .post(`${BASE_URL}/api/common/view-complaints`, {
          userID: userID,
          userType: userType,
        })
        .then((response) => {
          setSentComplaints(response.data.sentComplaints);
          setReceivedComplaints(response.data.receivedComplaints);
        })
        .catch((error) => {
          Alert.alert("Error", "Something went wrong");
          console.log(JSON.stringify(error.response, null, 2));
        })
        .finally(() => {
          setLoading(false);
        });

      const backAction = () => {
        navigation.goBack();
        return true; // This will prevent the app from closing
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [header, userID, userType])
  );

  useEffect(() => {
    // based on which header is selected, render the data
    if (header === "Sent Complains") {
      setDataToRender(sentComplaints);
    } else {
      setDataToRender(receivedComplaints);
    }
  }, [sentComplaints, receivedComplaints, header]);

  const renderItem = ({ item: complain }) => (
    <ComplainsCard
      colors={colors}
      header={header}
      complaintID={complain.id}
      complaintTitle={complain.complainttitle}
      complaintDescription={complain.complaintdescription}
      fullAddress={complain.fulladdress}
      senderName={complain.sendername}
      senderType={complain.sendertype}
      receiverName={complain.receivername}
      receiverType={complain.receivertype}
      createdOn={complain.createdon}
      complaintResolvedOn={complain.complaintresolvedon}
      complaintStatus={complain.complaintstatus}
      receiverRemark={complain.receiverremark}
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

      {loading && <ActivityIndicator size="large" color={colors.textPrimary} />}

      {!loading && dataToRender.length === 0 && (
        <Text
          style={[
            styles.fontBold,
            {
              fontSize: FontSizes.small,
              color: colors.textWhite,
              alignSelf: "center",
            },
          ]}
        >
          No data to show
        </Text>
      )}

      {!loading && dataToRender.length > 0 && (
        <FlatList
          data={dataToRender}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.buttons}
          ListFooterComponent={<View style={{ height: 10 }} />}
        />
      )}

      <View style={{ height: 70 }} />

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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default Complains;
