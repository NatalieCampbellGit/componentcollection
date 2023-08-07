import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        {/* GitHub Icon */}
        <a href="https://github.com/NatalieCampbellGit" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/natalie-campbell-1527b4a0/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        {/* Add more icons and links for other social media profiles */}
      </div>
    </footer>
  );
}

export default Footer;