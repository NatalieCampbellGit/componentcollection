import React from 'react';

function Project({ title, description, image }) {
  return (
    <button className="content-box">
      <div className="grid.box2">
        <img className="content-img" src={image} alt={title} />
        <h2 className="content-h3">{title}</h2><br />
        <a>{description}</a>
      </div>
    </button>
  );
}

export default Project;
