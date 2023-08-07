import React from 'react';
import profileImage from '../assets/images/profile.png'; 

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <h1>About Me</h1>
        </div>
        <div className="nine columns">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="about-text">
            <p>
                Demonstrated experience as a Content Management Systems Expert, expanding through a career in detailed 
                administrative support in dynamic Higher Education organisations. A Critical thinker with a proven 
                ability to extract, organise and analyse information to inform decision making processes. 
            </p>
            <p>
            Diplomatic and tactful with a proactive approach to working in diverse, multi-disciplinary teams, 
            recognising the value of diverse viewpoints and experiences bring to the team. Highly organised with a natural 
            attention to detail, demonstrated across a career in high-level administrative, compliance, and executive support. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;