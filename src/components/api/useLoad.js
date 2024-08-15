import { useEffect, useState } from "react";
import API from "./API";

const useLoad = (endpoint) => {
  // State
  const [records, setRecords] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");

  // Methods
  const loadRecords = async (endpoint) => {
    const response = await API.get(endpoint);
    if (response.isSuccess) {
      setRecords(response.result);
    } else {
      setLoadingMessage(response.message);
    }
  };

  useEffect(() => {
    loadRecords(endpoint);
  }, [endpoint]);

  // Return
  return [records, setRecords, loadingMessage, loadRecords];
};

export default useLoad;
