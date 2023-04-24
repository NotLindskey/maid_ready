import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './LandingPage.css';
import sprayImage from '../../images/Spray.png';
import houseImage from '../../images/house.png';
import speedClean from '../../images/speed-clean.png';
import relax from '../../images/relax.png';
import commotion from '../../images/commotion.png';
import mindfulness from '../../images/mindfulness.png';
import lastMinute from '../../images/last-minute.png';

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

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="landing-container">
      <div className="owners-container">
        <div className="owners-content">
          <img
            src={speedClean}
            alt="picture of a vacuum"
            width="260"
            height="190"
          ></img>
          <div className="owners-text">
            <h1>Need a quick clean?</h1>
            <h2>
              <span className="red-text">Maid!Ready! 24/7</span>
            </h2>
            <p>
              Worry no more! We're your <strong>on demand</strong> solution when
              you're in a pinch.
            </p>
            <p> Last-minute housekeeping service is what we do!</p>
            <button className="btn" onClick={registerOwnerHandle}>
              Owners Register Here
            </button>
          </div>
        </div>
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

      <div
        style={{ backgroundColor: '#da9494', textAlign: 'center', padding: 20 }}
      >
        <button className="btn-inverted fade-in" onClick={registerKeeperHandle}>
          Become a Keeper
        </button>
      </div>

      {/* line to break table to the next row */}
      <div className="break"></div>
      <br />

      <div>
        <div className="landing-content">
          <h1 className="fade-in">
            Get <span className="red-text">last-minute housekeeping</span> for
            your
            <br />
            short term or vacation rental.
          </h1>
          <p className="fade-in">
            Stop missing out on <strong>instant bookings</strong> just because
            you don't have a scheduled
            <br />
            cleaning. Make us your between clean!
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
            <p>
              <strong>Eco-Friendly</strong>
            </p>
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

        <div className="owners-request-service fade-in">
          <div className="image-container">
            <img
              src={relax}
              alt="picture of a vacuum"
              width="240"
              height="200"
            />
          </div>
          <div className="text-container">
            <h3>Sit back and relax,</h3>
            <h3 className="red-text">We handle cleaning.</h3>
            <p>
              You've been such a great host! Your property is conveniently
              located and super inviting. So, yeah, naturally, people want to{' '}
              <em>book it!</em> And that may mean instant reservation requests.
              Forget scheduling accommodations around your regularly scheduled
              cleanings. And don't you dare grab a mop. Maximize your profits
              and leave the in-between cleaning to us!
            </p>
            <p>
              <strong>
                Your time is better spent doing the things that matter the most.
              </strong>
            </p>
            <div className="button-container">
              <button
                className="btn"
                onClick={() => history.push('/register/owner')}
              >
                Request Service Today
              </button>
            </div>
          </div>
        </div>

        <div className="commotion-section fade-in">
          <div className="content-wrapper">
            <strong>Join the commotion</strong>
            <br />
            <span className="red-text">
              <strong>We are at your service!</strong>
            </span>
            <p>
              <strong>We LOVE what we do!</strong>
              <br />
              our team of keepers <em>want</em> to help. The schedule they
              create is completely their choice. Talk about empowering!
            </p>
            <p>
              <strong>Worry less. Play more!</strong>
              <br />
              Spend time with those who matter most. Do the things that are most
              important. Have fun! Leave the dirty work to us.
            </p>
            <p>
              <strong>Tell your friends about us!</strong>
              <br />
              Get a free cleaning when you refer a friend! (Good for up to $100
              off)
            </p>
            <div>
              <button
                className="btn"
                onClick={() => history.push('/register/owner')}
              >
                Book A Cleaning
              </button>
            </div>
          </div>
          <img
            className="img-commotion"
            src={commotion}
            alt="picture of commotion"
            width="260"
            height="270"
          />
        </div>

        <div className="booked-section fade-in">
          <div className="image-wrapper">
            <img
              src={lastMinute}
              alt="picture of a vacuum"
              width="220"
              height="210"
            />
          </div>
          <div className="text-wrapper">
            <p>
              Most rentals are booked
              <span className="red-text"> last minute.</span>
            </p>
            <p>
              Have your space "made-ready" by Maid!Ready! and you'll always be
              ready
            </p>
            <p>
              The season is heating up, and people are getting out and moving
              about, Don't let your scheduled cleaning service determine your
              rental availability.
              <br />
              <p>
                <em>
                  Most rentals are booked at the last minute during peak season.
                </em>
              </p>
            </p>
          </div>
        </div>

        <div className="keepers-practice fade-in">
          <div className="text-container">
            <p>
              Our keepers practice
              <span className="red-text"> mindful housekeeping.</span>
            </p>

            <p>your dirt is our business!</p>

            <p>We respect your personal belongings and environment</p>
            <p>
              Our keepers are background checked before arriving at a property
              for completing a service
            </p>
            <p>
              We keep you informed every step of the way. You'll know when a
              request was submitted, accepted, and completed.
            </p>
            <p>
              We take pride in caring for our community. We live here too, so we
              use the safest products on the market.
            </p>

            <div>
              <button
                className="btn"
                onClick={() => history.push('/register/keeper')}
              >
                Book Today!
              </button>
            </div>
          </div>

          <div className="image-container">
            <img
              src={mindfulness}
              alt="picture of a vacuum"
              width="250"
              height="240"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
