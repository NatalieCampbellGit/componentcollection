import React from 'react';
import PortfolioItem from './PortfolioItems'; 

function Bucket(props) {
  return (
    <div>
      <h1>Natalie Campbell</h1>
      <div className="portfolio-list">
      {props.portfolioItems && props.portfolioItems.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
      </div>
    </div>
  );
}

export default Bucket;