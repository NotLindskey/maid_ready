import React from 'react';
import ActiveRequest from '../ViewRequestsOwner/ActiveRequest/ActiveRequest';
import CompletedRequest from './CompletedRequest/CompletedRequest';
import './ViewRequestsOwner.css';

function ViewRequestsOwner() {
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
          <ActiveRequest />
        </div>

        <div className="list-completed-requests">
          <p>Completed Requests:</p>
          <CompletedRequest />
        </div>
        <br />
        <div>
          <button>Back</button>
        </div>
      </div>
    </div>
  );
}

export default ViewRequestsOwner;
