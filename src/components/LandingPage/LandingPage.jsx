import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Maid!Ready! 24-7');
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

      <div className="landing-content">
        <h3>
          Get last-minute house keeping for your short term or vacation rental.
        </h3>
        <p>
          stop missing out on instant bookings just because you don't have a
          scheduled cleaning. Make us your between clean!
        </p>

        <div className="grid">
          <div className="grid-col grid-col_4">
            <p>The streaks are talking!</p>
            <p>
              Our Keepers make sure your property looks and smells clean. And
              trust, none of them are for the streaks!
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <p>Eco-Friendly</p>
            <p>
              We live here too, we we provide mindful cleaning services that
              wont harm our environment.
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <p>Magic</p>
            <p>
              A clean, fresh smelling space after each guest, And you never even
              have to lift a finger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
