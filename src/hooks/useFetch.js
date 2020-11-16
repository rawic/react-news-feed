/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getData } from '../utilities';

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!url) throw Error('Please provide a valid URL');

    setLoading(true);
    setError(null);

    getData(url)
      .then((response) => {
        // Just to show loading
        return new Promise((resolve) => {
          setTimeout(() => {
            setFetchedData((prevData) => [
              ...new Set([...prevData, ...response]),
            ]);
            setHasMore(response.length > 0);
            resolve();
          }, 1500);
        });
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, error, fetchedData, hasMore };
}
