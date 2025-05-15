import React from 'react';
import './About.css'; // Custom CSS for styling

const About = () => {
  return (
    <div className="about-container">
      {/* Landing Section */}
      <div className="about-landing">
        <h1 className="about-heading">Welcome to My World</h1>
        <p className="about-description">
          Hi, I'm Habeel, a full-stack web developer with a passion for coding, designing, and problem-solving.
          I specialize in creating fast, responsive, and visually engaging web applications.
        </p>
        <button className="about-cta">Discover My Work</button>
      </div>

      {/* Skills Section */}
      <div className="about-skills">
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <h3>Frontend</h3>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Backend</h3>
            <ul>
              <li>Python</li>
              <li>Django</li>
              <li>SQL</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>API Integration</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
