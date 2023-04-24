import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import requestImg from './Request.png';
import viewImg from './View.png';
import { useHistory } from 'react-router';
import OwnersHomePageStyle from './OwnersHomePage.css';

function OwnersHomePage() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Owners Home Page'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Owners Home Page');
  const history = useHistory();

  const toProperties = () => {
    console.log('Button clicked to go to Properties Page');
    history.push('/properties');
  };

  const viewRequests = () => {
    console.log('This will go to Owner Requests page');
    history.push('/OwnerViewRequestsPage');
  };

  return (
    <div>
      {/* <UserPage /> */}
      <h2 className="heading">{heading}</h2>
      <div className="container1">
        <img
          className="box-container"
          onClick={() => history.push('/properties')}
          src={requestImg}
          alt="image of two cleaners with cleaning tools"
          width="500"
          height="375"
        />
        <button className="btn1" onClick={toProperties}>
          Create A Request
        </button>
      </div>
      <div className="container1">
        <img
          className="box-container"
          onClick={() => history.push('/OwnerViewRequestsPage')}
          src={viewImg}
          alt="image of a person writing in a planner"
          width="500"
          height="375"
        />
        <button className="btn1" onClick={viewRequests}>
          View Requests
        </button>
      </div>
    </div>
  );
}

export default OwnersHomePage;
