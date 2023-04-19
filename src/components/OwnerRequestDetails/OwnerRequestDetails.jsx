import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";

function OwnerRequestDetails() {
  const params = useParams();
  const history = useHistory();
  const requestDetails = useSelector((store) => store.job.job_detail);
  const requestId = params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_JOB_DETAIL", payload: { id: requestId } });
  }, []);

  const goBack = () => {
    history.push('/OwnerViewRequestsPage')
  }

  return (
    <div className="request-details">
      <div className="request-details-content">
        <div className="request-details-header"> 
          <h2>Request Details</h2>
        </div>

        <br />

        <div className="grid">
          <div className="grid-content-section">
            <div className="request-details-image"></div>
            <div className="request-details-text">
              <p>{requestDetails.username}</p>
              <p>{requestDetails.street} {requestDetails.city} {requestDetails.state} {requestDetails.zipcode}</p>
              <p>{new Date(requestDetails.date_completed_by).toLocaleDateString('en-US')}</p>
              <p>${requestDetails.price}</p>
              {requestDetails.claimed && requestDetails.status === 'complete' ? <p>Status: Completed by Keeper</p>  
              : requestDetails.claimed && requestDetails.status !== 'complete' ? <p>Status: Claimed by Keeper</p>
              : <p>Status: Not Claimed</p>}
            </div>
            <div className="grid-button-section">
              <div className="request-details-cancel">
                <button className="btn" onClick={() => goBack()}>back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerRequestDetails;
