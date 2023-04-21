import React from 'react';
import { useHistory} from 'react-router-dom';
import OwnerActiveRequest from '../OwnerActiveRequest/OwnerActiveRequest';


function OwnerActiveRequestList() {
  const history = useHistory();

  const handleToHome = () => {
    history.push('/OwnerViewRequestsPage');
  };

  return (
    <div>
      <h3>Active Requests:</h3>
      <OwnerActiveRequest />
      <br/>
      <div>
        <button className="btn" onClick={handleToHome}>
          Back
        </button>
      </div>
    </div>
  );
}

export default OwnerActiveRequestList;
