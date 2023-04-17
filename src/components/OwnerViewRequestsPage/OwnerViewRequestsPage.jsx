import React from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';

import OwnerActiveRequest from '../OwnerActiveRequest/OwnerActiveRequest';
import OwnerCompletedRequest from '../OwnerCompletedRequest/OwnerCompletedRequest';
import './OwnerViewRequestsPage.css';

function OwnerViewRequestsPage() {
  console.log('hello world!');
  const history = useHistory();
  const dispatch = useDispatch();

  // button to send user back to OwnersHomePage
  const handleToHome = () => {
    console.log('handleToHome clicked!');
    history.push('/');
  };

  const viewCompletedList = () => {
    console.log('viewCompletedList clicked');
    history.push('OwnerCompletedRequestsPage');
  };

  return (
    <div>
      <div>
        <h3>View Requests</h3>
      </div>

      <div className="list-section">
        <div className="list-header">
          <p>Select a list to view:</p>
        </div>

        {/* render 4 recent active requests */}
        <div className="list-active-requests">
          <p>Active Requests:</p>
          <OwnerActiveRequest />
        </div>

        {/* render 4 recent completed requests */}
        <div className="list-completed-requests">
          <button onClick={viewCompletedList}>Completed Requests:</button>
          <p>
            `get route to display jobItem only by: status = completed && ORDER
            BY date_completed_by` LIMIT 4;{' '}
          </p>
          <OwnerCompletedRequest />
        </div>
      </div>
      <br />

      {/* button to send back to home */}
      <div>
        <button onClick={handleToHome}>back</button>
      </div>
    </div>
  );
}

export default OwnerViewRequestsPage;
