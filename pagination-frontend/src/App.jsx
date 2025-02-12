import React, { useEffect, useState } from 'react';
import Products from './Products';

const App = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 10;
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      const json = await response.json();
      setData(json.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  const totalProducts = data.length;
  const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, numberOfPages - 1));
  };

  return !data.length ? (
    <h1>No Products yet</h1>
  ) : (
    <>
      <h1 className="heading">Implementation of Pagination</h1>

      <div className="page">
        <button className="pages" onClick={goToPrevPage} disabled={currentPage === 0}>
          ⏮️
        </button>
        {[...Array(numberOfPages).keys()].map((p) => (
          <span key={p} className={"pages " +(p==currentPage?"active":"")} onClick={() => handleClick(p)}>
            {p}
          </span>
        ))}
        <button className="pages" onClick={goToNextPage} disabled={currentPage === numberOfPages - 1}>
          ⏭️
        </button>
      </div>

      <div className="field">
        <label>Number of products: </label>
        <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} />
      </div>

      <div className="container">
        {data.slice(start, end).map((product) => (
          <Products key={product.id} title={product.title} thumbnail={product.thumbnail} />
        ))}
      </div>
    </>
  );
};

export default App;
