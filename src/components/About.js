import React from 'react';
import profileImage from '../assets/images/profile.png';
import '../App.css';

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <h3>About Me</h3>
        </div>
        <div className="nine columns">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="about-container">
            <p>
              Results-driven professional with over a decade of experience in project management, data analysis,
              and process improvement. Proven track record of defining, designing, and deploying successful internal
              and external projects while ensuring adherence to key performance indicators. Skilled in extracting and
              analyzing data to measure supplier and internal performance-to-plan and developing processes and tools to
              streamline workflows and drive efficiency. Strong expertise in collaborating with cross-functional teams,
              implementing strategies, and driving continuous improvement. Committed to delivering exceptional results
              and contributing to the success of organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;