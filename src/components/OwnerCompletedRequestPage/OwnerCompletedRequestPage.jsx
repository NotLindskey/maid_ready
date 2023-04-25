import React from 'react';
import { useHistory } from 'react-router-dom';
import OwnerCompletedRequest from '../OwnerCompletedRequest/OwnerCompletedRequest';

function OwnerCompletedRequestPage() {
  const history = useHistory();

  // navigate to View Requests Page
  const goBack = () => {
    history.push('/OwnerViewRequestsPage');
  };

  // display Completed Requests Page
  return (
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
