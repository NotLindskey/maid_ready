import "./JobDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import JobItemChecklist from "../JobItem/JobItemChecklist/JobItemChecklist";
import CompletionModal from "../KeeperJobCompletion/CompletionModal/CompletionModal";
function JobDetails() {
  const params = useParams();
  const history = useHistory();
  const jobId = params.id;

  const dispatch = useDispatch();
  const details = useSelector((store) => store.job.job_detail);

  const [isLoading, setIstLoading] = useState(false);
  const jobApplyHandler = async () => {
    handleButtonClick();
    await dispatch({ type: "APPLY_TO_JOB", payload: { jobId: details.id } });
    dispatch({ type: "FETCH_JOB_DETAIL", payload: { id: jobId } });

    setIstLoading(true);
  };

  const jobCompleteHandler = () => {
    dispatch({ type: "APPLY_TO_JOB", payload: { jobId: details.id } });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButtonClick() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    dispatch({ type: "FETCH_JOB_DETAIL", payload: { id: jobId } });
    setIstLoading(false);
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
            details.status === "complete" ? (
              <button
                className="btn job-detail-button-price"
                onClick={jobCompleteHandler}
              >
                delete
              </button>
            ) : (
              <button
                className="btn job-detail-button-price"
                onClick={jobCompleteHandler}
              >
                cancel
              </button>
            )
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

      <CompletionModal
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
        title=""
        redirect={true}
        noPadding={true}
      >
        <div className="apply-animation-body">
          <div
            className="apply-animation-loading-state"
            style={
              isLoading
                ? { backgroundColor: "#DA9494" }
                : { backgroundColor: "#7c6d9e" }
            }
          >
            {isLoading ? (
              <CiCircleCheck size={105} className="success" color="white" />
            ) : (
              <AiOutlineLoading size={95} className="loading" color="white" />
            )}
          </div>
          <div className="apply-animation-main-body">
            <p>Applied!</p>
            <button onClick={handleCloseModal}>close</button>
          </div>
        </div>
      </CompletionModal>
    </div>
  );
}

export default JobDetails;
