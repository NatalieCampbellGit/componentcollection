import React from 'react';

function PortfolioItems({ items }) {
  return (
    <div className="portfolio-items">
      {items.map((item) => (
        <div key={item.id} className="portfolio-item">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {/* Add any additional content for portfolio items here */}
        </div>
      ))}
    </div>
  );
}

export default PortfolioItems;