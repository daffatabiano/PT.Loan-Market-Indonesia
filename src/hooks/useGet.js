import { useEffect, useState } from 'react';

export default function useGet(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
      setError(null);
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
