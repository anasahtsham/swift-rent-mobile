import Analytics from "../../components/common/Analytics";
import { tenantData } from "../../helpers/data/AnalyticsData";
import { formatedMonthYear } from "../../helpers/utils";

const TenantAnalytics = () => {
  return (
    <Analytics
      analyticsData={tenantData}
      month={formatedMonthYear}
      totalRentsPaid="1230000"
      rentals="5"
      rentsPaid="4"
      rentsPending="1"
      tenantScrollHeader="Monthly Paid Rents"
    />
  );
};

export default TenantAnalytics;
