import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "../../constants";

export function deleteHireRequest(propertyID, setDeleteHireRequestLoading) {
  Alert.alert(
    "Are you sure you want to delete this hire request?",
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
          setDeleteHireRequestLoading(true);
          axios
            .post(`${BASE_URL}/api/owner/delete-hire-request`, {
              propertyID,
            })
            .then((response) => {
              console.log(response.data);
              Alert.alert("Hire request deleted successfully");
            })
            .catch((error) => {
              console.log(error.response.data.success);
              Alert.alert(
                "Failed to delete hire request",
                error.response.data.success
              );
            })
            .finally(() => {
              setDeleteHireRequestLoading(false);
            });
        },
      },
    ]
  );
}
