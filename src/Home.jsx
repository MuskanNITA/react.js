import React from 'react';
import './Home.css'; // Ensure you import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to <span>RAVIAN.AI</span></h1>
        <b className="subtitle">Turn Data into Decisions</b>
        <p className="description">Explore our advanced Data Analytics and Machine Learning capabilities offered by Ravian AI.</p>
        <button className="btn btn-primary">Explore Ravian AI</button>
      </div>
    </div>
  );
};

export default Home;
