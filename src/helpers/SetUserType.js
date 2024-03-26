import { useEffect, useState } from "react";
import { loadUserType } from ".";

export const useUserType = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    loadUserType().then((type) => {
      setUserType(type);
    });
  }, []);

  return userType;
};
