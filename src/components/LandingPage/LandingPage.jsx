import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="owners-section">
        <h1>Need a quick clean?</h1>
        <p>Maid!Ready! 24/7</p>
        <p>
          Worry no more! We're your on demand solution when you're in a pinch.
        </p>
        <p> Last-minute houseKeeping service is what we do!</p>

        <button>Register Here</button>
      </div>

      <div className="keeper-section"></div>
      <h1>Become your own boss!</h1>
      <p> Make a profile and decide when you want to work!</p>
      <p>Choose your bookings based on your current location!</p>
      <p> Maid Ready Cleaning Standards</p>

      <button>Become a Keeper</button>
    </div>
  );
}

export default LandingPage;
