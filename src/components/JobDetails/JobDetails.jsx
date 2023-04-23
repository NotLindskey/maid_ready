import "./JobDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import JobItemChecklist from "../JobItem/JobItemChecklist/JobItemChecklist";
function JobDetails() {
  const params = useParams();
  const history = useHistory();
  const jobId = params.id;

  const dispatch = useDispatch();
  const details = useSelector((store) => store.job.job_detail);

  const jobApplyHandler = async () => {
    await dispatch({ type: "APPLY_TO_JOB", payload: { jobId: details.id } });
    history.push("/keeper/job-list");
  };

  const jobCompleteHandler = () => {
    dispatch({ type: "APPLY_TO_JOB", payload: { jobId: details.id } });
  };
  useEffect(() => {
    dispatch({ type: "FETCH_JOB_DETAIL", payload: { id: jobId } });
  }, []);

  if (!Object.keys(details).length) {
    return <p>loading ...</p>;
  }
  return (
    <div className="job-details-body">
      {/* overview module */}
      <div className="job-details-overview">
        <div className="job-detail-title">
          <p>Overview</p>
        </div>
        <div className="job-detail-info">
          <div className="job-detail-name">
            <p>{details.username}</p>
          </div>
          <div className="job-detail-location">
            <p className="job-address">{details.street}</p>
            <div className="location-dot"></div>
            <p className="job-city">{details.city},</p>
            <p className="job-state">
              {details.state} {details.zipcode}
            </p>
          </div>
          <div className="job-detail-date">
            <p>{details.date_completed_by}</p>
          </div>
          <div className="job-detail-price">
            <p>${details.price}</p>
          </div>

          {details.claimed ? (
            <button
              className="btn job-detail-button-price"
              onClick={jobCompleteHandler}
            >
              delete
            </button>
          ) : (
            <button
              onClick={jobApplyHandler}
              className="btn job-detail-button-price"
            >
              Apply
            </button>
          )}
        </div>
      </div>

      {/* checklist module */}
      <div className="job-details-checklist">
        <JobItemChecklist
          job_checklist={details.job_checklist.filter((task) => task.standard)}
          checklist_type={"standard"}
          jobId={jobId}
          pageType={"view"}
        />

        {details.job_checklist.filter((task) => !task.standard).length ? (
          <JobItemChecklist
            job_checklist={details.job_checklist.filter(
              (task) => !task.standard
            )}
            checklist_type={"custom"}
            jobId={jobId}
            pageType={"view"}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default JobDetails;
