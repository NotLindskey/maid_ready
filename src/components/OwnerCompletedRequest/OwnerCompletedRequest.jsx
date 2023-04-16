import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import JobItem from '../JobItem/JobItem';

import './OwnerCompletedRequest.css';

function OwnerCompletedRequest() {
  console.log('in completed request component');
  const history = useHistory();
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.job.jobs);

  useEffect(() => {
    dispatch({ type: 'FETCH_JOBS' });
  }, []);

  // Render
  return (
    <div className="job-list-body">
      <div className="job-list-container">
        {jobs.length ? (
          jobs.map((job) => (
            <div>
              <JobItem
                key={job.id}
                id={job.id}
                owner={job.username}
                street={job.street}
                city={job.city}
                state={job.state}
                zip={job.zipcode}
                price={job.price}
                date={job.date_completed_by}
              />
            </div>
          ))
        ) : (
          <p>no jobs found</p>
        )}
      </div>
    </div>
  );
}

export default OwnerCompletedRequest;
