import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1>About Us</h1>
        <p>
          At <span className="highlight">RAVIAN</span>, we are dedicated to transforming the landscape of data analytics through innovation and cutting-edge technology.
        </p>
        <p className="icon"></p>
        <p>
          As pioneers in the field, we have developed the world's leading AI data scientist—an intelligent platform that leads the way in crafting machine learning and deep learning models, conducting comprehensive data analysis, and delivering actionable insights through intuitive visualizations.
        </p>
        <p>
          Our journey began with a vision to empower businesses with the tools they need to harness the power of their data and make informed decisions that drive success. With a team of passionate experts and a commitment to excellence, we have turned that vision into reality.
        </p>
        <p>
          Today, <span className="highlight">RAVIAN</span> stands at the forefront of AI-driven analytics, helping businesses of all sizes unlock the full potential of their data assets. Whether you're uncovering hidden patterns, predicting future trends, or optimizing operations, RAVIAN AI is your trusted partner in navigating the complexities of data-driven decision-making.
        </p>
        <p>
          Join us on this journey as we continue to push the boundaries of what's possible in the realm of data analytics. Welcome to <span className="highlight">RAVIAN AI</span>—where innovation meets intelligence.
        </p>
      </div>
    </div>
  );
};

export default About;
