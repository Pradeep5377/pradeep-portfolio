import React from 'react';
// import './Projects.css'; // Optional external CSS

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <div className="project">
        <h2>Smart Attendance System</h2>
        <p>
          A web-based attendance system built with <strong>React</strong> and <strong>Spring Boot</strong>. It supports
          features like <strong>password authentication</strong>, <strong>geolocation validation</strong>, and is ready
          for integration with face and fingerprint recognition.
        </p>
        <p><strong>Technologies:</strong> Spring Boot, React, MySQL, Maven</p>
      </div>

      <div className="project">
        <h2>Child Nutrition Tracker (MSME-Funded)</h2>
        <p>
          A real-time system used in Anganwadis to record children's data like weight, height, attendance, and food distribution.
          Currently integrating Bluetooth-based device support.
        </p>
        <p><strong>Technologies:</strong> MongoDB, Express, React, Node.js (MERN)</p>
      </div>

      <div className="project">
        <h2>Smart Energy Meter (IoT)</h2>
        <p>
          An ESP32-based smart meter that monitors and logs household electrical loads using <strong>Home Assistant</strong> and displays it via a web interface.
        </p>
        <p><strong>Technologies:</strong> ESP32, MicroPython, MQTT, Home Assistant</p>
      </div>

      <div className="project">
        <h2>Code Review & Refactoring Tool</h2>
        <p>
          A tool that uses <strong>ChatGPT API</strong> to review user-submitted code and suggest improvements, integrated with a live frontend code editor.
        </p>
        <p><strong>Technologies:</strong> Spring Boot, React, OpenAI API</p>
      </div>

      <div className="project">
        <h2>Taxi Booking System</h2>
        <p>
          A Java-based simulation project that dynamically assigns taxis based on pickup/drop time, distance, and earnings. Also available as a full-stack version.
        </p>
        <p><strong>Technologies:</strong> Java, React, Spring Boot (Full Stack version)</p>
      </div>
    </div>
  );
}

export default Projects;
