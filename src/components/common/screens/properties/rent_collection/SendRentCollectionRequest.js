import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "../../../../../constants";

export function sendRentCollectionRequest(
  propertyID,
  tenantID,
  setSendRentCollectionRequestLoading
) {
  return new Promise((resolve, reject) => {
    Alert.alert(
      "Are you sure you want to send a rent collection request?",
      "This action cannot be undone.",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Send",
          onPress: () => {
            setSendRentCollectionRequestLoading(true);

            // to owner or manager as tenant
            axios
              .post(`${BASE_URL}/api/tenant/submit-collection-request`, {
                propertyID,
                tenantID,
              })
              .then((response) => {
                Alert.alert(
                  "Success",
                  "Rent collection request sent successfully"
                );
                resolve();
              })
              .catch((error) => {
                if (error.response.status === 400) {
                  Alert.alert("Error", error.response.data.success);
                } else {
                  console.log(JSON.stringify(error.response, null, 2));
                  Alert.alert("Error", "Something went wrong");
                }
                reject();
              })
              .finally(() => {
                setSendRentCollectionRequestLoading(false);
              });
          },
        },
      ]
    );
  });
}
