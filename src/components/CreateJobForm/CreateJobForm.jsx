import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function CreateJobForm(props) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Create A Job');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [sq_footage, setSq_Footage] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const createJob = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <h2>{heading}</h2>
      <div className='job-form'>
        <form onSubmit ={createJob}>
            <label htmlFor="street address">Street Address:</label> 
            <input value={street} onChange={(event) => setStreet(event.target.value)} type="text"/>
            <br/>
            <label htmlFor="city">City:</label>
            <input value={city} onChange={(event) => setCity(event.target.value)} type="text"/>
            <br/>
            <label htmlFor="state">State:</label>
            <input value={state} onChange={(event) => setState(event.target.value)} type="text"/>
            <br/>
            <label htmlFor="zipcode">Zip Code:</label>
            <input value={zipcode} onChange={(event) => setZipcode(event.target.value)} type="text"/>
            <br/>
            <label htmlFor="sq_footage">Sq Footage:</label>
            <input value={sq_footage} onChange={(event) => setSq_Footage(event.target.value)} type="number"/>
            <br/>
            <label htmlFor="price">Price:</label>
            <input value={price} onChange={(event) => setPrice(event.target.value)} type="number"/>
            <br/>
            <label htmlFor="date">Date:</label>
            <input value={date} onChange={(event) => setDate(event.target.value)} type="date"/>
            <br/>
            <label htmlFor="time">Time:</label>
            <input value={time} onChange={(event) => setTime(event.target.value)} type="time"/>
        </form>
      </div>
    </div>
  );
}

export default CreateJobForm;