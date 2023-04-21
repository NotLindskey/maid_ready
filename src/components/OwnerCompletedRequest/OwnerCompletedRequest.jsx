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
    dispatch({ type: "FETCH_OWNER_REQUESTS" });
  }, []);

  // Render
  return (
    // <div className="job-list-body">
    //   <div className="job-list-container">
    //     {jobs.length ? (
    //       jobs.map((job) => (
    //         <div>
    //           <JobItem
    //             key={job.id}
    //             id={job.id}
    //             owner={job.username}
    //             street={job.street}
    //             city={job.city}
    //             state={job.state}
    //             zip={job.zipcode}
    //             price={job.price}
    //             date={job.date_completed_by}
    //           />
    //         </div>
    //       ))
    //     ) : (
    //       <p>no jobs found</p>
    //     )}
    //   </div>
    // </div>
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
          )})};
    </div>
  );
}

export default OwnerCompletedRequest;
