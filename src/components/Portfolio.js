import React from 'react';
import { FaGithub } from 'react-icons/fa';
import infopulseImage from '../assets/images/infopulse.jpg';
import readmeImage from '../assets/images/readme.png';
import logomakerImage from '../assets/images/logomaker.png';
import fridgefrenImage from '../assets/images/fridgefren.png';
import profileImage from '../assets/images/watercolour.jpg';
import '../App.css'; 

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Interactive Full-Stack Application',
      image: infopulseImage,
      repo: 'https://github.com/NatalieCampbellGit/InfoPulse',
      subheader: 'RESTful API',
    },
    {
      id: 2,
      title: 'Professional README Generator',
      image: readmeImage,
      repo: 'https://github.com/NatalieCampbellGit/BookfileArranger',
      subheader: 'Node.js',
    },
    {
        id: 3,
        title: 'SVG Logo Maker',
        image: logomakerImage,
        repo: 'https://github.com/NatalieCampbellGit/CrestCreator',
        subheader: 'Object-oriented Programming',
    },
    {
        id: 4,
        title: 'Interactive Front-End Application',
        image: fridgefrenImage,
        repo: 'https://github.com/stanno03/Fridge-Fren',
        subheader: 'Server-side API',
    }, 
  ];

  return (
    <section id="portfolio" style={{ backgroundImage: `url(${profileImage})` }}>
      <h3>Portfolio</h3>
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