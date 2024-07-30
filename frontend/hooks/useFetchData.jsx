import { useEffect, useState } from "react";
import { token } from "../src/utils/congig";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (!url) {
          throw new Error("URL is required");
        }
        
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Check if response is not OK and throw an error
        if (!res.ok) {
          const result = await res.json();
          throw new Error(result.message || 'Something went wrong');
        }

        const result = await res.json();
        setData(result.data);
      } catch (err) {
        console.error('Fetch data error:', err); // Log detailed error information
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token]); // Ensure token is included in dependencies if it might change

  return { data, loading, error };
};

export default useFetchData;

