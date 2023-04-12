import React from 'react';

function OwnerCompletedRequest() {
  console.log('in completed request component');

  return (
    <div>
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
          <button>View</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default OwnerCompletedRequest;
