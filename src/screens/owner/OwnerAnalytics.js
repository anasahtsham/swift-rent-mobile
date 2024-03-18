import Analytics from "../../components/common/Analytics";
import { ownerData } from "../../helpers/data/AnalyticsData";
import { formatedMonthYear } from "../../helpers/utils";

const OwnerAnalytics = () => {
  return (
    <Analytics
      analyticsData={ownerData}
      month={formatedMonthYear}
      rentsCollected="1230000"
      maintenanceCost="20000"
      totalProperties="10"
      receivedRents="123"
      pendingRents="321"
    />
  );
};

export default OwnerAnalytics;
