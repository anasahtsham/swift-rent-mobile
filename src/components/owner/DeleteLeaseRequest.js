import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "../../constants";

export function deleteLeaseRequest(propertyID, setDeleteLeaseRequestLoading) {
  return new Promise((resolve, reject) => {
    Alert.alert(
      "Are you sure you want to delete this lease request?",
      "This action cannot be undone.",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            setDeleteLeaseRequestLoading(true);
            axios
              .post(`${BASE_URL}/api/owner/delete-lease-request`, {
                propertyID,
              })
              .then((response) => {
                Alert.alert("Lease request deleted successfully");
                resolve();
              })
              .catch((error) => {
                console.log(error.response.data.success);
                Alert.alert(
                  "Failed to delete lease request",
                  error.response.data.success
                );
                reject();
              })
              .finally(() => {
                setDeleteLeaseRequestLoading(false);
              });
          },
        },
      ]
    );
  });
}
