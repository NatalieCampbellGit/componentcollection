import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Interactive Full-Stack Application',
      image: 'infopulse.jpg',
      repo: 'https://github.com/NatalieCampbellGit/InfoPulse',
      subheader: 'RESTful API',
    },
    {
      id: 2,
      title: 'Professional README Generator',
      image: 'readme.png',
      repo: 'https://github.com/NatalieCampbellGit/BookfileArranger',
      subheader: 'Node.js',
    },
    {
        id: 3,
        title: 'SVG Logo Maker',
        image: 'logomaker.png',
        repo: 'https://github.com/NatalieCampbellGit/CrestCreator',
        subheader: 'Object-oriented Programming',
    },
    {
        id: 4,
        title: 'Interactive Front-End Application',
        image: 'fridgefren.png',
        repo: 'https://github.com/your-username/project4',
        subheader: 'Server-side API',
    }, 
  ];

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <a key={item.id} href={item.repo} target="_blank" rel="noopener noreferrer">
            <div className="portfolio-item">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-hover">
                <h3>{item.title}</h3>
                <a href={item.repo} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <p>{item.subheader}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;