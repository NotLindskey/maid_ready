import "./KeeperJobCompletion.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    dispatch({ type: "FETCH_JOB_DETAIL", payload: { id: jobId } });
  }, []);

  if (!Object.keys(details).length) {
    return <p>loading ...</p>;
  }
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
      </div>
      <div className="job-details-checklist">
        <div className="job-detail-title">
          <p>Checklist</p>
        </div>
        <div className="job-detail-checklist-container">
          <ul>
            {details.job_checklist.map((task) => {
              return (
                <li key={task.id}>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "CHECK_TASK",
                        payload: { task_id: task.id, job_id: jobId },
                      });
                    }}
                  >
                    <div>
                      <p
                        style={
                          task.isComplete
                            ? { textDecoration: "line-through" }
                            : {}
                        }
                      >
                        {task.task}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <label>
        <input type="file"></input>
      </label>
      {details.status === "incomplete" ? (
        <button onClick={handleButtonClick} className="btn">
          complete
        </button>
      ) : (
        <button className="btn">processing...</button>
      )}
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
            complete
          </button>
        </div>
      </CompletionModal>
    </div>
  );
}

export default KeeperJobCompletion;
