import React from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import OwnerActiveRequest from '../OwnerActiveRequest/OwnerActiveRequest';
import OwnerCompletedRequest from '../OwnerCompletedRequest/OwnerCompletedRequest';
import './OwnerViewRequestsPage.css';

function OwnerViewRequestsPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  // get all requests
  useEffect(() => {
    dispatch({ type: "FETCH_OWNER_REQUESTS" });
    dispatch({type: "RESET_JOB_DETAIL"})
  }, []);

  // button to send user back to OwnersHomePage
  const handleToHome = () => {
    history.push('/');
  };

  // display active and completed requests
  return (
    <div>
      <div>
        <h2>View Requests</h2>
      </div>

      <div className="job-list-body">
        <div className="list-header">
          <h3>Select a list to view:</h3>
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
          <OwnerCompletedRequest />
        </div>
      </div>
      <br />

      {/* button to send back to home */}
      <div>
        <button className="btn" onClick={handleToHome}>
          Back
        </button>
      </div>
    </div>
  );
}

export default OwnerViewRequestsPage;
