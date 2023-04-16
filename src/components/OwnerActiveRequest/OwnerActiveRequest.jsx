import React from 'react';
import { useHistory } from 'react-router-dom';

import './OwnerActiveRequest.css';

function OwnerActiveRequest() {
  console.log('in active request component');
  const history = useHistory();

  const handleViewRequest = () => {
    console.log('handleViewRequest clicked!');
    history.push('/OwnerRequestDetails');
  };

  return (
    <div className="active-box-container">
      <div className="active-request-header">
        Property Name Here
        <div className="active-request-content">
          <div className="active-request-image">Insert Image Property Here</div>
          <div className="active-request-details">
            <ul>
              <li>Name</li>
              <li>address</li>
              {/* <li>miles</li> */} 
              <li>dates</li>
              <li>price</li>
            </ul>
          </div>
          <button onClick={handleViewRequest}>View</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default OwnerActiveRequest;
