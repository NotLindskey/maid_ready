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
      </div>

      {/* checklist module */}
      <div className="job-details-checklist">
        <JobItemChecklist
          job_checklist={details.job_checklist.filter((task) => task.standard)}
          checklist_type={"standard"}
          jobId={jobId}
        />

        <JobItemChecklist
          job_checklist={details.job_checklist.filter((task) => !task.standard)}
          checklist_type={"custom"}
          jobId={jobId}
        />
      </div>

      {/* photo module */}

      <label>
        <input type="file"></input>
      </label>

      {/* button module */}
      {details.status === "incomplete" ? (
        <button onClick={handleButtonClick} className="btn">
          complete
        </button>
      ) : (
        <button className="btn">processing...</button>
      )}

      {/* modal module */}
      <CompletionModal
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
        title="Review"
      >
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
                  {details.street} {details.city}, {details.state}{" "}
                  {details.zipcode}
                </p>
              </div>
              <div className="job-detail-date">
                <p>{details.date_completed_by}</p>
              </div>
              <div className="job-detail-price">
                <p>${details.price}</p>
              </div>
            </div>
          </div>
          <div className="job-details-checklist">
            <div className="job-detail-title">
              <p>Checklist</p>
            </div>
            <div className="job-detail-checklist-container"></div>
          </div>
          <div className="job-details-checklist">
            <div className="job-detail-title">
              <p>photos</p>
            </div>
            <div className="job-detail-checklist-container"></div>
          </div>

          <button className="btn" onClick={completeJobHandler}>
            submit
          </button>
        </div>
      </CompletionModal>
    </div>
  );
}

export default KeeperJobCompletion;
