import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddPropertyPage.css'

function AddPropertyPage(props) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Add A Property');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [sqFootage, setSqFootage] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const addProperty = (event) => {
    event.preventDefault();
    const newProperty = {
      street,
      city,
      state,
      zipcode,
      sq_footage: sqFootage,
    }

    dispatch({type: 'ADD_PROPERTY', payload: newProperty});
    history.push('/properties');
  }

  return (
    <div>
      <h2>{heading}</h2>
      <div className='add-property-form'>
        <form onSubmit ={addProperty}>
            <div className='property-input-div'>
            <label htmlFor="street address">Street Address</label>
            <br /> 
            <input value={street} onChange={(event) => setStreet(event.target.value)} className="property-input" type="text"/>
            </div>
            <div className='property-input-div'>
            <label htmlFor="city">City</label>
            <br />
            <input value={city} onChange={(event) => setCity(event.target.value)} className="property-input" type="text"/>
            </div>
            <div className='property-input-div'>
            <label htmlFor="state">State</label>
            <br />
            <input value={state} onChange={(event) => setState(event.target.value)} className="property-input" type="text"/>
            </div>
            <div className='property-input-div'>
            <label htmlFor="zipcode">Zip Code</label>
            <br />
            <input value={zipcode} onChange={(event) => setZipcode(event.target.value)} className="property-input" type="text"/>
            </div>
            <div className='property-input-div'>
            <label htmlFor="sqFootage">Sq Footage</label>
            <br />
            <input value={sqFootage} onChange={(event) => setSqFootage(event.target.value)} className="property-input" type="number"/>
            </div>
            <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddPropertyPage;