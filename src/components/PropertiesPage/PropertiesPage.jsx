import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PropertiesPage.css';

function PropertiesPage(props) {
  const properties = useSelector((store) => store.property.properties);
  const [heading, setHeading] = useState('Properties');
  const dispatch = useDispatch();
  const history = useHistory();

  // get properties from database
  useEffect(() => {
    dispatch({ type: 'FETCH_PROPERTIES' });
  }, []);

  // navigate to Add A Property page
  const toAddAProperty = () => {
    history.push('properties/add');
  };

  // get data for selected property, navigate to Create Job page
  const selectProperty = (property) => {
    dispatch({ type: 'FETCH_PROPERTY', payload: property });
    history.push('/job/create');
  };

  // lists owner's properties and button to select property to create job
  return (
    <div className="properties-container">
      <h2>{heading}</h2>
      <div>
        <button className="btn" onClick={toAddAProperty}>
          Add A Property
        </button>
      </div>
      <div className="scroll-select-property">
        <div>
          <p className="center">Choose a property:</p>
        </div>
        <div className="properties-section">
          {properties.length === 0 && <p>No properties listed</p>}
          {properties.map((property) => {
            return (
              <div className="property-listing" key={property.id}>
                <p>
                  {property.street} {property.city} {property.state}
                  {property.zipcode}
                </p>
                <p>{property.sq_footage} sq ft.</p>
                <button
                  className="btn"
                  onClick={() => selectProperty(property)}
                >
                  Select
                </button>
              </div>
            );
          })}
        </div>
        <button className="btn" onClick={() => history.push('/home')}>
          Back
        </button>
      </div>
    </div>
  );
}

export default PropertiesPage;
