import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import './OwnerRequestDetails.css';

function OwnerRequestDetails() {
  const params = useParams();
  const history = useHistory();
  const requestDetails = useSelector((store) => store.job.request_detail);
  const requestId = params.id;
  const dispatch = useDispatch();

  // get request detail from database
  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST_DETAIL', payload: { id: requestId } });
  }, []);

  // navigate to View Requests Page
  const goBack = () => {
    history.push('/OwnerViewRequestsPage');
  };

  // card that lists request details
  return (
    <div className="request-details">
      <div className="request-details-content">
        <div className="request-details-header">
          <h2>Request Details</h2>
        </div>
        <br />
        <div className="grid">
          <div className="grid-content-section">
            <div className="request-details-text">
              <p>
                <strong>User: </strong>
                {requestDetails.username}
              </p>
              <p>
                <strong>Address:</strong> {requestDetails.street}{' '}
                {requestDetails.city} {requestDetails.state}{' '}
                {requestDetails.zipcode}
              </p>
              <p>
                <strong>Date: </strong>
                {new Date(requestDetails.date_completed_by).toLocaleDateString(
                  'en-US',
                )}
              </p>
              <p>
                <strong>Price:</strong> ${requestDetails.price}
              </p>
              {requestDetails.claimed &&
              requestDetails.status === 'complete' ? (
                <p>
                  <strong>Status:</strong> Completed by Keeper
                </p>
              ) : requestDetails.claimed &&
                requestDetails.status !== 'complete' ? (
                <p>
                  <strong>Status:</strong> Claimed by Keeper
                </p>
              ) : (
                <p>
                  <strong>Status:</strong> Not Claimed
                </p>
              )}
            </div>
            <div className="grid-button-section">
              <div className="request-details-cancel">
                <button className="btn" onClick={() => goBack()}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerRequestDetails;
