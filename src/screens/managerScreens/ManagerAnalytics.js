import Analytics from "../../components/common/Analytics";
import { ownerAndManagerData } from "../../helpers/data/AnalyticsData";

const ManagerAnalytics = () => {
  return (
    <Analytics
      analyticsData={ownerAndManagerData}
      month="June 2024"
      rentsCollected="1230000"
      maintenanceCost="20000"
      totalProperties="10"
      receivedRents="123"
      pendingRents="321"
    />
  );
};

export default ManagerAnalytics;
