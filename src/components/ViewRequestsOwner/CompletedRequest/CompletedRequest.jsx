import React from 'react';

function CompletedRequest() {
  console.log('in Completed request component');

  return (
    <div>
      <div className="completed-request-header">
        Property Name Here
        <div className="completed-request-content">
          <div className="completed-request-image">
            Insert Image Property Here
          </div>
          <div className="completed-request-details">
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

export default CompletedRequest;
