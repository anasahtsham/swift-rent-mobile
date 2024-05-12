import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "../../constants";

export function deleteProperty(propertyID, setDeletePropertyLoading) {
  return new Promise((resolve, reject) => {
    Alert.alert(
      "Are you sure you want to delete this property?",
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
            setDeletePropertyLoading(true);
            axios
              .post(`${BASE_URL}/api/owner/delete-property`, {
                propertyID,
              })
              .then((response) => {
                Alert.alert("Property deleted successfully");
                resolve();
              })
              .catch((error) => {
                console.log(error.response.data.success);
                Alert.alert(
                  "Failed to delete property",
                  error.response.data.success
                );
                reject();
              })
              .finally(() => {
                setDeletePropertyLoading(false);
              });
          },
        },
      ]
    );
  });
}
