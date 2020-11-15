import { useEffect, useState } from 'react';
import { getData } from '../utilities';

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!url) throw Error('Please provide a valid URL');

    setLoading(true);
    setError(null);

    getData(url)
      .then((response) => {
        // Just to show loading
        setTimeout(() => {
          setData((prevData) => [...new Set([...prevData, ...response])]);
          setHasMore(response.length > 0);
          setLoading(false);
        }, 1000);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [url]);

  return { loading, error, data, hasMore };
}
