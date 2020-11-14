import { useEffect, useState } from 'react';
import { getData } from './../utilities';

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getData(url).then((data) => {
      setData((prevData) => [...new Set([...prevData, ...data])]);
      setHasMore(data.length > 0);
      setLoading(false);
    });
  }, [url]);

  return { loading, error, data, hasMore };
}
