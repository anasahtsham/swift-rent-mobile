import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import Analytics from "../../components/common/screens/analytics/Analytics";
import { BASE_URL } from "../../constants";
import { useUserID } from "../../helpers/SetUserID";
import { formatedMonthYear } from "../../helpers/utils";

const OwnerAnalytics = () => {
  const userID = useUserID();
  const [loading, setLoading] = useState(true);

  const [rentsCollected, setRentsCollected] = useState(0);
  const [maintenanceCost, setMaintenanceCost] = useState(0);
  const [totalProperties, setTotalProperties] = useState(0);
  const [receivedRents, setReceivedRents] = useState(0);
  const [pendingRents, setPendingRents] = useState(0);

  const [ownerData, setOwnerData] = useState(ownerData);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);

      const data = {
        ownerID: userID,
      };

      axios
        .post(`${BASE_URL}/api/owner/home-analytics`, data)
        .then((response) => {
          setRentsCollected(response.data.currentMonthReport.rentscollected);
          setMaintenanceCost(response.data.currentMonthReport.maintenancecost);
          setTotalProperties(response.data.currentMonthReport.totalproperties);
          setReceivedRents(response.data.paidRents[0].totalproperties);
          setPendingRents(response.data.pendingRents[0].totalproperties);

          setOwnerData(response.data.pastMonthReports);
        })
        .catch((error) => {
          Alert.alert("Error", "Something went wrong");
          console.log(JSON.stringify(error.response, null, 2));
        })
        .finally(() => {
          setLoading(false);
        });
    }, [userID])
  );

  return (
    <Analytics
      loading={loading}
      analyticsData={ownerData}
      month={formatedMonthYear}
      rentsCollected={rentsCollected}
      maintenanceCost={maintenanceCost}
      totalProperties={totalProperties}
      receivedRents={receivedRents}
      pendingRents={pendingRents}
    />
  );
};

export default OwnerAnalytics;
