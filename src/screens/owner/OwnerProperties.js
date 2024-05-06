import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { Alert } from "react-native";
import Properties from "../../components/common/screens/properties/Properties";
import { BASE_URL } from "../../constants";
import { useUserID } from "./../../helpers/SetUserID";

const OwnerProperties = () => {
  const userID = useUserID();
  const [propertiesData, setPropertiesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        if (!userID) return; // Don't run if userID is null

        try {
          const response = await axios.post(
            `${BASE_URL}/api/owner/fetch-property-list`,
            {
              userID: userID,
            }
          );
          setPropertiesData(response.data);
        } catch (error) {
          Alert.alert("Error fetching property list:", "Network error");
          console.error("Error fetching property list:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [userID]) // Re-run the effect when userID changes
  );

  return <Properties ownerPropertiesData={propertiesData} loading={loading} />;
};

export default OwnerProperties;
