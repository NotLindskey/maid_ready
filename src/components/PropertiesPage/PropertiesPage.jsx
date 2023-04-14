import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PropertiesPage.css';


function PropertiesPage(props) {
  const properties = useSelector((store) => store.properties);
  const [heading, setHeading] = useState('Properties');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({type: 'FETCH_PROPERTIES'});
    }, []);

  const toAddAProperty = () => {
    history.push('properties/add');
  }

  const toCreateJobForm = () => {
    history.push('jobs/create');
  }

  return (
    <div>
      <h2>{heading}</h2>
      <button className='btn' onClick={toAddAProperty}>Add A Property</button>
        <div className='properties-section'>
            {properties.length === 0 && <p>No properties listed</p>}
            {properties.map(property => {
              return (
                <div className='property-listing' key={property.id}>
                  <p>{property.street} {property.city} {property.state} {property.zipcode}</p>
                  <p>{property.sq_footage} sq ft.</p>
                  <button onClick={toCreateJobForm}>Select</button>
                </div>
              )
            })}
        </div>
    </div>
  );
}

export default PropertiesPage;