import "./JobDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";

function JobDetails() {
  const params = useParams();
  const history = useHistory();
  const jobId = params.id;

  const dispatch = useDispatch();
  const details = useSelector((store) => store.job.job_detail);

  const jobApplyHandler = async () => {
    await dispatch({type:"APPLY_TO_JOB", payload: {jobId: details.id}})
    history.push('/keeper/job-list')
  }

  const jobCompleteHandler = () => {
    dispatch({type:"APPLY_TO_JOB", payload: {jobId: details.id}})
  }
  useEffect(() => {
    dispatch({ type: "FETCH_JOB_DETAIL", payload: { id: jobId } });
  }, []);

  return (
    <div className="job-details-body">
      <div className="job-details-overview">
        <div className="job-detail-title">
          <p>Overview</p>
        </div>
        <div className="job-detail-info">
          <div className="job-detail-name">
            <p>{details.username}</p>
          </div>
          <div className="job-detail-location">
            <p>
              {details.street} {details.city}, {details.state} {details.zipcode}
            </p>
          </div>
          <div className="job-detail-date">
            <p>{details.date_completed_by}</p>
          </div>
          <div className="job-detail-price">
            <p>${details.price}</p>
          </div>
        </div>
        {
          details.claimed ? <button onClick={jobCompleteHandler}>Complete</button> : <button onClick={jobApplyHandler}>Apply</button>
        }
      </div>
      <div className="job-details-checklist">
        <div className="job-detail-title">
          <p>Checklist</p>
        </div>
        <div className="job-detail-checklist-container"></div>
      </div>
    </div>
  );
}

export default JobDetails;
