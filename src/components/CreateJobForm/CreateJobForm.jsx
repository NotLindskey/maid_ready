import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function CreateJobForm(props) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Create A Job');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [sqFootage, setSqFootage] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const createJob = (event) => {
    event.preventDefault();
    const newProperty = {
      street,
      city,
      state,
      zipcode,
      sq_footage: sqFootage,
    }
    dispatch({type: 'ADD_PROPERTY', payload: newProperty});
    history.push('/user');
  }

//   const calculatePrice = () => {
//     price = (0.08 * sqFootage);
//     return price;
//   }

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
            <label htmlFor="sqFootage">Sq Footage:</label>
            <input value={sqFootage} onChange={(event) => setSqFootage(event.target.value)} type="number"/>
            <br/>
            <label htmlFor="price">Price:</label>
            <input value={price} onChange={(event) => setPrice(event.target.value)} type="number"/>
            <br/>
            <label htmlFor="date">Date Completed By:</label>
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