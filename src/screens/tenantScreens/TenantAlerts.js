import Alerts from "../../components/common/Alerts";
import { alertsData } from "../../helpers/AlertsData";

const TenantAlerts = () => {
  return <Alerts alertsData={alertsData} />;
};

export default TenantAlerts;
