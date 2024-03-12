import Alerts from "../../components/common/Alerts";
import { alertsData } from "../../helpers/data/AlertsData";

const TenantAlerts = () => {
  return <Alerts alertsData={alertsData} />;
};

export default TenantAlerts;
