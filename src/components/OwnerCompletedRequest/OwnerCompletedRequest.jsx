import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './OwnerCompletedRequest.css';

function OwnerCompletedRequest() {
  const requests = useSelector((store) => store.job.owner_requests);
  const history = useHistory();
  const dispatch = useDispatch();
  const completedRequests = requests.filter(
    (request) => request.status === 'complete',
  );

  // get all requests
  useEffect(() => {
    dispatch({ type: 'FETCH_OWNER_REQUESTS' });
  }, []);

  // navigate to request details page
  const handleViewRequest = (request) => {
    console.log(request.id);
    history.push(`/OwnerRequestDetails/${request.id}`);
  };

  // delete completed request
  const completedDelete = (request) => {
    console.log(`Completed Job Delete at: ${request.id}`);
    dispatch({
      type: 'DELETE_COMPLETED_REQUEST',
      payload: request.id
    });
  };

  // display card of completed request details
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
            <button className="btn" onClick={() => completedDelete(request)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default OwnerCompletedRequest;
