import Analytics from "../../components/common/Analytics";
import { dummyData } from "../../helpers/AnalyticsData";

const TenantAnalytics = () => {
  return (
    <Analytics
      dummyData={dummyData}
      month="June 2024"
      rentsCollected="1230000"
      maintenanceCost="20000"
      totalProperties="10"
      recievedRents="123"
      pendingRents="321"
    />
  );
};

export default TenantAnalytics;
