import { message } from "antd";
import { useEffect, useState } from "react";

const useMutation = (promise) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const execute = async (...payload) => {
    try {
      setLoading(true);
      const res = await promise(...payload);
      setData(res.data?.data) || [];
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    execute,
    data,
    loading,
    error,
  };
};

export default useMutation;
