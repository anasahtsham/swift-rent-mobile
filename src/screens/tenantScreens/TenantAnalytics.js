import Analytics from "../../components/common/Analytics";
import { dummyData } from "../../helpers/AnalyticsData";

const TenantAnalytics = () => {
  return (
    <Analytics
      dummyData={dummyData}
      month="June 2024"
      rentsPaid="1230000"
      rentals="5"
      receivedRents="123"
      pendingRents="321"
    />
  );
};

export default TenantAnalytics;
