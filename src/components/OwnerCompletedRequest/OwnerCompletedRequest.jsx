import React from 'react';
import { useHistory } from 'react-router-dom';

import './OwnerCompletedRequest.css';

function OwnerCompletedRequest() {
  console.log('in completed request component');
  const history = useHistory();

  const viewCompletedBtn = () => {
    console.log('clicked!');
    history.push('/OwnerRequestDetails');
  };

  // Render
  return (
    <div className="completed-box-container">
      <div className="complete-request-header">
        Property Name Here
        <div className="complete-request-content">
          <div className="complete-request-image">
            Insert Image Property Here
          </div>
          <div className="complete-request-details">
            <ul>
              <li>Name</li>
              <li>address</li>
              <li>miles</li>
              <li>dates</li>
              <li>price</li>
            </ul>
          </div>
          <button onClick={viewCompletedBtn}>View</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default OwnerCompletedRequest;
