import Analytics from "../../components/common/Analytics";
import { dummyData } from "../../helpers/AnalyticsData";

const TenantAnalytics = () => {
  return (
    <Analytics
      dummyData={dummyData}
      month="June 2024"
      totalRentsPaid="1230000"
      rentals="5"
      rentsPaid="4"
      rentsPending="1"
    />
  );
};

export default TenantAnalytics;
