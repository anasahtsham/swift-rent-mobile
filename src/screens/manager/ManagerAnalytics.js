import Analytics from "../../components/common/screens/analytics/Analytics";
import { managerData } from "../../helpers/data/AnalyticsData";
import { formatedMonthYear } from "./../../helpers/utils/index";

const ManagerAnalytics = () => {
  return (
    <Analytics
      analyticsData={managerData}
      month={formatedMonthYear}
      commission="1230000"
      managedProperties="10"
      receivedRents="123"
      pendingRents="321"
    />
  );
};

export default ManagerAnalytics;
