import "./KeeperJobCompletion.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import Modal from "./CompletionModal/CompletionModal";

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
      </div>
      <div className="job-details-checklist">
        <div className="job-detail-title">
          <p>Checklist</p>
        </div>
        <div className="job-detail-checklist-container"></div>
      </div>

      <label>
        <input type="file"></input>
      </label>

      <button onClick={handleButtonClick}>complete</button>
      <Modal
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
        title="Modal Title"
      >
        <p>Modal content goes here</p>
      </Modal>
    </div>
  );
}

export default KeeperJobCompletion;
