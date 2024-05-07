import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "../../constants";

export function fireManager(propertyID, setFireManagerLoading) {
  Alert.alert(
    "Are you sure you want to fire the manager on this property?",
    "This action cannot be undone.",
    [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Fire",
        onPress: () => {
          setFireManagerLoading(true);
          axios
            .post(`${BASE_URL}/api/owner/fire-manager`, {
              propertyID,
            })
            .then((response) => {
              console.log(response.data);
              Alert.alert("Manager fired successfully");
            })
            .catch((error) => {
              console.log(error.response.data.success);
              Alert.alert(
                "Failed to fire manager",
                error.response.data.success
              );
            })
            .finally(() => {
              setFireManagerLoading(false);
            });
        },
      },
    ]
  );
}
