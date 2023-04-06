import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import requestImg from './Request.png'; 


function OwnersHomePage() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Owners Home Page'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Owners Home Page');

  return (
    <div>
      <h2>{heading}</h2>
      <div className='container'>
        <img src={requestImg} alt="image of two cleaners with cleaning tools" />
        <button className='btn'>Create A Request</button>
      </div>
    </div>
  );
}

export default OwnersHomePage;
