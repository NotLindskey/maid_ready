import React from 'react';
import OwnerActiveRequest from '../OwnerActiveRequest/OwnerActiveRequest';
import OwnerCompletedRequest from '../OwnerCompletedRequest/OwnerCompletedRequest';
import './OwnerViewRequestsPage.css';
function OwnerViewRequestsPage() {
  console.log('hello world!');

  return (
    <div>
      <div>
        <h3>View Requests</h3>
      </div>

      <div className="list-section">
        <div className="list-header">
          <p>Select a list to view:</p>
        </div>

        <div className="list-active-requests">
          <p>Active Requests:</p>
          <OwnerActiveRequest />
        </div>

        <div className="list-completed-requests">
          <p>Completed Requests:</p>
          <OwnerCompletedRequest />
        </div>
      </div>
    </div>
  );
}

export default OwnerViewRequestsPage;
