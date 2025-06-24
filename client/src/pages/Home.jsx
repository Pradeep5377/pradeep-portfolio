import React from 'react';
// import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Hi, I'm Pradeep T M</h1>
      <h2 className="home-subtitle">Final Year EEE Student & Aspiring Software Developer</h2>

      <p className="home-description">
        I'm passionate about building efficient and scalable applications using technologies like
        <strong> Java</strong>, <strong>Spring Boot</strong>, <strong>React</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>.
        I'm also experienced in hardware-software integrated projects.
      </p>

      <a href="/projects" className="home-button">View My Projects</a>
    </div>
  );
};

export default Home;
