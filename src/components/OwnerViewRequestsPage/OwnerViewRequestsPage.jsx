import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import OwnerActiveRequest from '../OwnerActiveRequest/OwnerActiveRequest';
import OwnerCompletedRequest from '../OwnerCompletedRequest/OwnerCompletedRequest';
import './OwnerViewRequestsPage.css';

function OwnerViewRequestsPage() {
  console.log('hello world!');
  const requests = useSelector((store) => store.job.owner_requests);
  const history = useHistory();
  const dispatch = useDispatch();
  const completedRequests = requests.filter(
    (request) => request.status === 'complete',
  );

  useEffect(() => {
    dispatch({ type: 'FETCH_OWNER_REQUESTS' });
  }, []);

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
          <button className="btn" onClick={viewCompletedList}>
            Completed Requests:
          </button>
          {/* <OwnerCompletedRequest /> */}
          {completedRequests.map((request) => {
            return (
              <div className="completed-requests" key={request.id}>
                <p>
                  {request.street} {request.city} {request.state}{' '}
                  {request.zipcode}
                </p>
                <p>{request.date_completed_by}</p>
                <p>{request.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <br />

      {/* button to send back to home */}
      <div>
        <button className="btn" onClick={handleToHome}>
          back
        </button>
      </div>
    </div>
  );
}

export default OwnerViewRequestsPage;
