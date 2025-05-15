import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1 className="home-title">Welcome to My Professional Portfolio</h1>
        <p className="home-description">
          Hi, I'm Habeel Bhatti , a passionate Full-Stack Developer. I create modern, responsive, and dynamic web applications.
        </p>
        <button className="home-btn">Discover My Projects</button>
      </div>
      <footer className="home-footer">
        <p>© 2025 Habeel. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;


