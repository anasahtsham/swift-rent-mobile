import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import Properties from "../../components/common/screens/properties/Properties";
import { BASE_URL } from "../../constants";
import { useUserID } from "./../../helpers/SetUserID";

const TenantRentals = () => {
  const userID = useUserID();
  const [loading, setLoading] = useState(true);
  const [rentalsData, setRentalsData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchRentals = async () => {
        if (userID) {
          try {
            const response = await axios.post(
              `${BASE_URL}/api/tenant/list-of-rentals`,
              { tenantID: userID }
            );
            setRentalsData(response.data.rentals);
            setLoading(false);
          } catch (error) {
            console.error(error);
            Alert.alert("Error", "Network Error");
          } finally {
            setLoading(false);
          }
        }
      };

      fetchRentals();
    }, [userID])
  );

  return (
    <Properties isTenant={true} rentalsData={rentalsData} loading={loading} />
  );
};

export default TenantRentals;
