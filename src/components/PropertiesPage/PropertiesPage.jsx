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

  return (
    <div>
      <h2>{heading}</h2>
      <button className='btn'>Add A Property</button>
        <div className='properties-section'>
            {properties.map(property => {
              return (
                <div className='property-listing' key={property.id}>
                  <p>{property.street} {property.city} {property.state} {property.zipcode}</p>
                  <p>{property.sq_footage} sq ft.</p>
                  <button>Select</button>
                </div>
              )
            })}
        </div>
    </div>
  );
}

export default PropertiesPage;