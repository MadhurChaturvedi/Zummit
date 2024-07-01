import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
        setStatus(res.status);
        console.log(res)
      } catch (err) {
        setStatus(err.response.status);
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error, Status };
};

export default useFetch;
