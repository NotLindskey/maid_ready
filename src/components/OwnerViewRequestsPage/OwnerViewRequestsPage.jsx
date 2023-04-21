import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import OwnerActiveRequest from '../OwnerActiveRequest/OwnerActiveRequest';
import OwnerCompletedRequest from '../OwnerCompletedRequest/OwnerCompletedRequest';
import './OwnerViewRequestsPage.css';

function OwnerViewRequestsPage() {
  const requests = useSelector((store) => store.job.owner_requests);
  const history = useHistory();
  const dispatch = useDispatch();
  const completedRequests = requests.filter(
    (request) => request.status === 'complete',
  );

  useEffect(() => {
    dispatch({ type: "FETCH_OWNER_REQUESTS" });
    dispatch({type: "RESET_JOB_DETAIL"})
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

  const handleViewRequest = (request) => {
    console.log(request.id);
    history.push(`/OwnerRequestDetails/${request.id}`);
  };

  return (
    <div>
      <div>
        <h3>View Requests</h3>
      </div>

      <div className="job-list-body">
        <div className="list-header">
          <p>Select a list to view:</p>
        </div>

        {/* render 4 recent active requests */}
        <div className="list-active-requests">
          <div className="active-requests-header">
            <h4>Active Requests:</h4>
            <button className="requests-page-view-btn" onClick={()=>{history.push(`/OwnerActiveRequestsPage`)}}>view</button>
          </div>
          <OwnerActiveRequest />
        </div>
        
        <div className="break"></div>
      

        {/* render 4 recent completed requests */}
        <div className="active-box-container">
          <div className='completed-requests-header'>
            <h4> Completed Requests:</h4>
            <button className="requests-page-view-btn" onClick={()=>{history.push(`/OwnerCompletedRequestsPage`)}}>view</button>
          </div>
          {/* <OwnerCompletedRequest /> */}
          <div className='job-list-container'>{completedRequests.map((request) => {
            return (
              <div className="job-item-body" key={request.id}>
                <p>
                  {request.street} {request.city} {request.state}{' '}
                  {request.zipcode}
                </p>
                <p>{new Date(request.date_completed_by).toLocaleDateString('en-US')}</p>
                <p>${request.price}</p>
                <button className="btn" onClick={() => handleViewRequest(request)}>View</button>
                <button className="btn">Delete</button>
              </div>
            );
          })}
          </div>
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
