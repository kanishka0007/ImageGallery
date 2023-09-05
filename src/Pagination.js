import React from 'react';

const Pagination = ({ loadMore }) => (
  <div className="pagination">
    <button onClick={loadMore}>Load More</button>
  </div>
);

export default Pagination;