import { useState, useEffect, useCallback } from 'react';

export default function useFetch(request, defaultValue) {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);

  const fetchApi = (request) => {
    fetch(request)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const initFetch = useCallback(() => {
    fetchApi(request);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return { data, error };
}
