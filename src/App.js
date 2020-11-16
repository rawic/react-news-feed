import { useState, useRef, useCallback } from 'react';
import { API_URL } from './constants';
import Grid from './components/Grid/Grid';
import Loading from './components/Loading/Loading';
import useFetch from './hooks/useFetch';

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, fetchedData, hasMore } = useFetch(
    `${API_URL}/posts?_page=${pageNumber}`
  );

  const observer = useRef(null);

  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <section className="App">
      <h1 className="title">
        <span aria-hidden="true">👁️</span> Recent posts
      </h1>

      <Grid posts={fetchedData} lastPostElementRef={lastPostElementRef} />

      {loading && <Loading />}

      {/* TODO: */}
      {error && <p>{error}</p>}
    </section>
  );
}

export default App;
