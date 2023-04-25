import React, { useState } from 'react';
import requestImg from './Request.png';
import viewImg from './View.png';
import { useHistory } from 'react-router';

function OwnersHomePage() {
  const [heading, setHeading] = useState('Owners Home Page');
  const history = useHistory();

  // navigate to Properties Page
  const toProperties = () => {
    history.push('/properties');
  };

  // navigate to View Requests Page
  const viewRequests = () => {
    history.push('/OwnerViewRequestsPage');
  };
  
  // page with two images, one link to create a request and another link to view requests */}
  return (
    <div>
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
