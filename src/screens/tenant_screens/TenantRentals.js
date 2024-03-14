import Properties from "../../components/common/Properties";
import { rentalsData } from "../../helpers/data/PropertiesData";

const TenantRentals = () => {
  return <Properties isTenant={true} rentalsData={rentalsData} />;
};

export default TenantRentals;
