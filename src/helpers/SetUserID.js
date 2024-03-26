import { useEffect, useState } from "react";
import { loadUserID } from ".";

export const useUserID = () => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    loadUserID().then((id) => {
      setUserID(id);
    });
  }, []);

  return userID;
};
