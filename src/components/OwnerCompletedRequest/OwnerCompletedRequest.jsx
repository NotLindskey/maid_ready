import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import JobItem from '../JobItem/JobItem';

import './OwnerCompletedRequest.css';

function OwnerCompletedRequest() {
  const requests = useSelector((store) => store.job.owner_requests);
  const history = useHistory();
  const dispatch = useDispatch();
  const completedRequests = requests.filter(
    (request) => request.status === 'complete',
  );
  // const jobs = useSelector((store) => store.job.jobs);

  useEffect(() => {
    // dispatch({ type: 'FETCH_JOBS' });
    dispatch({ type: 'FETCH_OWNER_REQUESTS' });
  }, []);

  const handleToHome = () => {
    history.push('/OwnerViewRequestsPage');
  };

  const handleViewRequest = (request) => {
    console.log(request.id);
    history.push(`/OwnerRequestDetails/${request.id}`);
  };

  // Render
  return (
    <div className="job-list-container">
      {completedRequests.map((request) => {
        return (
          <div className="job-item-body-complete-card" key={request.id}>
            <p>
              <strong>Address:</strong> {request.street} {request.city}{' '}
              {request.state} {request.zipcode}
            </p>
            <p>
              <strong>Date completed:</strong>
              {new Date(request.date_completed_by).toLocaleDateString('en-US')}
            </p>
            <p>
              <strong>Price:</strong> ${request.price}
            </p>
            <p>
              <strong>Status:</strong> Completed by Keeper
            </p>
            <button className="btn" onClick={() => handleViewRequest(request)}>
              View
            </button>
            <button className="btn">Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default OwnerCompletedRequest;
