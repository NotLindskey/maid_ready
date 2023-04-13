import React from 'react';

function OwnerRequestDetails() {
  console.log('inside OwnerRequestDetails, hello world :)');

  return (
    <div className="request-details">
      <div className="request-details-content">
        <div className="request-details-header"> Request Details:</div>

        <br />

        <div className="grid">
          <div className="grid-content-section">
            <div className="request-details-image">'insert image here'</div>
            <div className="request-details-text">
              <p>Name:</p>
              <p>Address:</p>
              <p>Distance:</p>
              <p>active dates:</p>
              <p>invoice:</p>
            </div>
            <div className="grid-button-section">
              <div className="request-details-cancel">
                <button>cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerRequestDetails;
