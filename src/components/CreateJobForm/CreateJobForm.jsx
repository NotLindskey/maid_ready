import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function CreateJobForm(props) {
  const property = useSelector((store) => store.property.property);
  const [heading, setHeading] = useState('Create A Job');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [sqFootage, setSqFootage] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const createJob = (event) => {
    event.preventDefault();
    // const newProperty = {
    //   street,
    //   city,
    //   state,
    //   zipcode,
    //   sq_footage: sqFootage,
    // }
    const newJob = {
      price,
      date_completed_by: date,
      time,
      status: 'incomplete',
      claimed: 'FALSE',
    }
    dispatch({type: 'ADD_JOB', payload: newJob});
    // dispatch({type: 'ADD_PROPERTY', payload: newProperty});
    //history.push('/user');
  }

//   const calculatePrice = () => {
//     price = (0.08 * sqFootage);
//     return price;
//   }
console.log(property)

  return (
    <div>
      <h2>{heading}</h2>
      <div className='job-form'>
        <form onSubmit ={createJob}>
            {/* <label htmlFor="street address">Street Address:</label> 
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
            <br/> */}
            <p>Address:</p>
            <p>{property.street} {property.city} {property.state} {property.zipcode}</p>
            <p>{property.sq_footage} sq ft.</p>
            <label htmlFor="price">Price:</label>
            <input value={price} onChange={(event) => setPrice(event.target.value)} type="number"/>
            <br/>
            <label htmlFor="date">Date Completed By:</label>
            <input value={date} onChange={(event) => setDate(event.target.value)} type="date"/>
            <br/>
            <label htmlFor="time">Time:</label>
            <input value={time} onChange={(event) => setTime(event.target.value)} type="time"/>
            <br/>
            <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default CreateJobForm;