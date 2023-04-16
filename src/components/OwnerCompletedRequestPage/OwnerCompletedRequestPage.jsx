import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import JobItem from '../JobItem/JobItem';

function OwnerCompletedRequestPage() {
  console.log('in the OwnerCompletedRequestPage');
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.job.jobs);

  useEffect(() => {
    dispatch({ type: 'FETCH_JOBS' });
  }, []);

  return (
    <div>
      <p>Completed Requests List:</p>
      <p>
        <strong>
          `get route to display jobItem only by: status = completed && ORDER BY
          date_completed_by`
        </strong>
      </p>
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
      </div>{' '}
    </div>
  );
}

export default OwnerCompletedRequestPage;
