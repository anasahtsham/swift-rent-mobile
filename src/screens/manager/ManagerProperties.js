import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import Properties from "../../components/common/screens/properties/Properties";
import { BASE_URL } from "../../constants";
import { useUserID } from "../../helpers/SetUserID";

const ManagerProperties = () => {
  const managerID = useUserID();
  const [managerPropertiesData, setManagerPropertiesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      const fetchData = async () => {
        if (!managerID) return; // Don't run if managerID is null

        try {
          const response = await axios.post(
            `${BASE_URL}/api/manager/view-managed-properties`,
            {
              managerID,
            }
          );
          setManagerPropertiesData(response.data);
        } catch (error) {
          Alert.alert("Error", "Something went wrong.");
          console.error("Error fetching property list:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [managerID])
  );

  return (
    <Properties
      loading={loading}
      isManager={true}
      managerPropertiesData={managerPropertiesData}
    />
  );
};

export default ManagerProperties;
