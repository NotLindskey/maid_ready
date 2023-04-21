import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import JobItem from '../JobItem/JobItem';
import OwnerCompletedRequest from '../OwnerCompletedRequest/OwnerCompletedRequest';

function OwnerCompletedRequestPage() {
  console.log('in the OwnerCompletedRequestPage');
  const dispatch = useDispatch();
  const history = useHistory();
  const jobs = useSelector((store) => store.job.jobs);

  useEffect(() => {
    dispatch({ type: 'FETCH_JOBS' });
  }, []);

  const goBack = () => {
    history.push('/OwnerViewRequestsPage');
  };

  return (
    // <div>
    //   <h2>Completed Requests</h2>
    //   <div className="job-list-body">
    //     <div className="job-list-container">
    //       {jobs.length ? (
    //         jobs.map((job) => (
    //           <div>
    //             <JobItem
    //               key={job.id}
    //               id={job.id}
    //               owner={job.username}
    //               street={job.street}
    //               city={job.city}
    //               state={job.state}
    //               zip={job.zipcode}
    //               price={job.price}
    //               date={job.date_completed_by}
    //             />
    //           </div>
    //         ))
    //       ) : (
    //         <p>no jobs found</p>
    //       )}
    //     </div>
    //   </div>{' '}
    // </div>
    <div>
      <h3>Completed Requests:</h3>
      <OwnerCompletedRequest />
      <br/>
       <div>
        <button className="btn" onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default OwnerCompletedRequestPage;
