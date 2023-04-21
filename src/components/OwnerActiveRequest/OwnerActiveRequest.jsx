import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import './OwnerActiveRequest.css';

function OwnerActiveRequest() {
  const history = useHistory();
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.job.owner_requests);
  const activeRequests = requests.filter(
    (request) => request.status !== 'complete',
  );

  useEffect(() => {
    dispatch({ type: "FETCH_OWNER_REQUESTS" });
  }, []);

 const handleDelete = (request) => {
  console.log(`Delete clicked at: ${request.id}`);
  dispatch({
    type: "DELETE_OWNER_REQUEST",
    payload: request.id
  })
 }

  const handleViewRequest = (request) => {
    console.log(request.id);
    history.push(`/OwnerRequestDetails/${request.id}`);
  };

  return (
    <div className="active-box-container">
      <div className="active-request-header">
        {/* <h2>Property</h2>  */}
        <div className="active-request-content">
          {/* <div className="active-request-image">Insert Image Property Here</div> */}
          <div className="job-list-container">
            {/* <ul>
              <li>Name</li>
              <li>address</li>
              <li>miles</li>
              <li>dates</li>
              <li>price</li>
            </ul> */}
            {activeRequests.map((request) => {
              return (
                <div className="job-item-body" key={request.id}>
                  <p>
                    {request.street} {request.city} {request.state}{' '}
                    {request.zipcode}
                  </p>
                  <p>
                      {new Date(request.date_completed_by).toLocaleDateString()}
                  </p>
                  <p>${request.price}</p>

                  <button className="btn" onClick={() => handleViewRequest(request)}>View</button>
                  <button className="btn" onClick={() => handleDelete(request)}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerActiveRequest;
