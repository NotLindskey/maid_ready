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
        <div className="job-detail-title">
          <p>Standard Tasks</p>
        </div>
        <div className="job-detail-checklist-container">
          {details.job_checklist.map((task, index) => {
            if (task.standard && index < indexValueStandard) {
              return (
                <div key={task.id} className="job-detail-checklist-main">
                  <input
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={() => {
                      dispatch({
                        type: "CHECK_TASK",
                        payload: {
                          task_id: task.id,
                          job_id: jobId,
                          task_state: task.isComplete,
                        },
                      });
                    }}
                  />
                  <button
                    className="job-detail-checklist-button"
                    onClick={() => {
                      dispatch({
                        type: "CHECK_TASK",
                        payload: {
                          task_id: task.id,
                          job_id: jobId,
                          task_state: task.isComplete,
                        },
                      });
                    }}
                  >
                    <div className="job-detail-checklist-title">
                      <p
                        style={
                          task.isComplete
                            ? {
                                textDecoration: "line-through",
                                color: "rgb(150,150,150)",
                              }
                            : {}
                        }
                      >
                        {task.task}
                      </p>
                    </div>
                  </button>
                </div>
              );
            }
          })}

          {indexValueStandard < details.job_checklist.length && (
            <button
              className="job-complete-show-more"
              onClick={() => {
                setIndexValueStandard(details.job_checklist.length + 1);
              }}
            >
              Show more...
            </button>
          )}

          {indexValueStandard > details.job_checklist.length && (
            <button
              className="job-complete-show-more"
              onClick={() => {
                setIndexValueStandard(8);
              }}
            >
              Show less...
            </button>
          )}
        </div>

        <div className="job-detail-checklist-container">
          <div className="job-detail-title">
            <p>Custom Tasks</p>
          </div>
          {details.job_checklist.map((task, index) => {
            if (!task.standard) {
              return (
                <div key={task.id} className="job-detail-checklist-main">
                  <input
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={() => {
                      dispatch({
                        type: "CHECK_TASK",
                        payload: {
                          task_id: task.id,
                          job_id: jobId,
                          task_state: task.isComplete,
                        },
                      });
                    }}
                  />
                  <button
                    className="job-detail-checklist-button"
                    onClick={() => {
                      dispatch({
                        type: "CHECK_TASK",
                        payload: {
                          task_id: task.id,
                          job_id: jobId,
                          task_state: task.isComplete,
                        },
                      });
                    }}
                  >
                    <div className="job-detail-checklist-title">
                      <p
                        style={
                          task.isComplete
                            ? {
                                textDecoration: "line-through",
                                color: "rgb(150,150,150)",
                              }
                            : {}
                        }
                      >
                        {task.task}
                      </p>
                    </div>
                  </button>
                </div>
              );
            }
          })}
        </div>
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
