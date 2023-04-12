import React from 'react';

import './OwnerActiveRequest.css';

function OwnerActiveRequest() {
  console.log('in active request component');

  return (
    <div>
      <div className="active-request-header">
        Property Name Here
        <div className="active-request-content">
          <div className="active-request-image">Insert Image Property Here</div>
          <div className="active-request-details">
            <ul>
              <li>Name</li>
              <li>address</li>
              <li>miles</li>
              <li>dates</li>
              <li>price</li>
            </ul>
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerActiveRequest;
