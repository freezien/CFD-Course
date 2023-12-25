import { message } from "antd";
import { useEffect, useState } from "react";

const useQuery = (promise, dependencies = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async (query) => {
    try {
      setLoading(true);
      const res = await promise(query);
      setData(res.data?.data || []);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    data,
    error,
    loading,
    refetch: fetchData,
  };
};

export default useQuery;
