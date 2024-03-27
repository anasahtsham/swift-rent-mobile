import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useState } from "react";
import Properties from "../../components/common/Properties";
import { BASE_URL } from "../../constants";
import { useUserID } from "./../../helpers/SetUserID";

const OwnerProperties = () => {
  const userID = useUserID();
  const [propertiesData, setPropertiesData] = useState([]);

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

          // Add IDs to the response data
          const responseWithIds = response.data.map((item, index) => ({
            ...item,
            id: index + 1,
          }));

          setPropertiesData(responseWithIds);
        } catch (error) {
          console.error("Error fetching property list:", error);
        }
      };

      fetchData();
    }, [userID]) // Re-run the effect when userID changes
  );

  return <Properties propertiesData={propertiesData} />;
};

export default OwnerProperties;
