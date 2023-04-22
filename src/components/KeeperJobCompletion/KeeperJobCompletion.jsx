import "./KeeperJobCompletion.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import JobItemChecklist from "../JobItem/JobItemChecklist/JobItemChecklist";
import CompletionModal from "./CompletionModal/CompletionModal";
import { object } from "prop-types";

function KeeperJobCompletion() {
  const params = useParams();
  const history = useHistory();
  const jobId = params.id;

  const dispatch = useDispatch();
  const details = useSelector((store) => store.job.job_detail);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButtonClick() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }
  function completeJobHandler() {
    dispatch({ type: "COMPLETE_JOB", payload: { id: jobId } });
    handleCloseModal();
  }

  const [indexValueStandard, setIndexValueStandard] = useState(7);
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

          {/* button module */}
          {details.status === "incomplete" ? (
            <button
              onClick={handleButtonClick}
              className="btn job-detail-button-price"
            >
              complete
            </button>
          ) : (
            <button className="btn">processing...</button>
          )}
        </div>
      </div>

      {/* checklist module */}
      <div className="job-details-checklist">
        <JobItemChecklist
          job_checklist={details.job_checklist.filter((task) => task.standard)}
          checklist_type={"standard"}
          jobId={jobId}
          pageType={"change"}
        />

        <JobItemChecklist
          job_checklist={details.job_checklist.filter((task) => !task.standard)}
          checklist_type={"custom"}
          jobId={jobId}
          pageType={"change"}
        />
      </div>

      {/* photo module */}

      <label>
        <input type="file"></input>
      </label>

      {/* modal module */}
      <CompletionModal
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
        title="Review"
      >
        <div className="job-details-body">
          <div className="job-details-overview" style={{ width: "32rem" }}>
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

              {/* button module */}
              <button
                className="btn btn job-detail-button-price"
                onClick={completeJobHandler}
              >
                submit
              </button>
            </div>
          </div>

          {/* checklist module */}
          <div className="job-details-checklist" style={{ width: "32rem" }}>
            <JobItemChecklist
              job_checklist={details.job_checklist.filter(
                (task) => task.standard
              )}
              checklist_type={"standard"}
              jobId={jobId}
              pageType={"view"}
              isModal={true}
            />

            <JobItemChecklist
              job_checklist={details.job_checklist.filter(
                (task) => !task.standard
              )}
              checklist_type={"custom"}
              jobId={jobId}
              pageType={"view"}
              isModal={true}
            />
          </div>
        </div>
      </CompletionModal>
    </div>
  );
}

export default KeeperJobCompletion;
