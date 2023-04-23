import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './LandingPage.css';
import sprayImage from '../../images/Spray.png';
import houseImage from '../../images/house.png';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Maid!Ready! 24-7');
  const history = useHistory();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onLogin = (event) => {
    history.push('/login');
  };

  const registerOwnerHandle = () => {
    console.log('Owners Register Here Clicked!');
    history.push('/register/owner');
  };

  const registerKeeperHandle = () => {
    console.log('Become a Keeper Clicked!');
    history.push('/register/keeper');
  };

  return (
    <div className="container">
      <div className="owners-container">
        <h1>Need a quick clean?</h1>
        <h2 style={{ color: 'red' }}>Maid!Ready! 24/7</h2>
        <p>
          Worry no more! We're your on demand solution when you're in a pinch.
        </p>
        <p> Last-minute housekeeping service is what we do!</p>

        <button className="btn" onClick={registerOwnerHandle}>
          Owners Register Here
        </button>
      </div>

      {/* line to break table to the next row */}
      <div className="break"></div>
      <br />

      <div className="keeper-section">
        <div className="keeper-section-element">
          <h1>Become your own boss!</h1>
          <br />
          <p> Make a profile and decide when you want to work!</p>
          <br />
          <p>Choose your bookings based on your current location!</p>
          <br />
          <Link to="/CleaningStandards" className="nav-cleaning-standards">
            <u>Maid Ready Cleaning Standards</u>
          </Link>
        </div>

        <div>
          <img src={houseImage} alt="house.png" width="380" height="380"></img>
        </div>
      </div>

      <div style={{ backgroundColor: '#da9494', textAlign: 'center' }}>
        <button className="btn-inverted fade-in" onClick={registerKeeperHandle}>
          Become a Keeper
        </button>
      </div>

      {/* line to break table to the next row */}
      <div className="break"></div>
      <br />

      <div className="">
        <div className="landing-content fade-in">
          <h1>
            Get last-minute house keeping for your short term or vacation
            rental.
          </h1>
          <p>
            stop missing out on instant bookings just because you don't have a
            scheduled cleaning. Make us your between clean!
          </p>

          <div>
            <img
              className="fade-in"
              src={sprayImage}
              alt="Spray.png"
              width="500"
              height="500"
            ></img>
          </div>
          <br />
        </div>

        {/* line to break table to the next row */}
        <div className="break"></div>
        <br />

        <div className="grid fade-in">
          <div className="grid-col grid-col_4 grid-box-container">
            <p>
              <strong>The streaks are talking!</strong>
            </p>
            <p>
              Our Keepers make sure your property looks and smells clean. And
              trust, none of them are for the streaks!
            </p>
          </div>
          <div className="grid-col grid-col_4 grid-box-container">
            <p>Eco-Friendly</p>
            <p>
              We live here too, we we provide mindful cleaning services that
              won't harm our environment.
            </p>
          </div>
          <div className="grid-col grid-col_4 grid-box-container">
            <p>
              <strong>Magic</strong>
            </p>
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
