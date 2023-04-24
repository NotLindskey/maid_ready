import "./JobFeature.css";
import JobCarousel from "../JobCarousel/JobCarousel";
import { useHistory } from "react-router-dom";
import { useState } from "react";
function JobFeature({ title, link, jobs }) {
  const history = useHistory();

  const [moveState, setMoveState] = useState(0);
  const [testState, setTestState] = useState(0);
  const moveLeft = () => {
    if (moveState >= 1) {
      setMoveState(moveState - 1);
    }
  };
  const moveRight = () => {
    if (jobs.length > 3) {
      if (jobs.length === 4 && moveState < 1) {
        setMoveState(moveState + 1);
      }

      if (jobs.length === 5 && moveState < 1) {
        setMoveState(moveState + 1);
      }

      if (jobs.length >= 6 && moveState < 2) {
        setMoveState(moveState + 1);
      }
    } else {
      setMoveState(0);
    }
  };
  return (
    <div className="keeper-job-feature">
      <div className="keeper-header-link">
        <p className="keeper-home-link-title">{title}</p>
        <div className="keeper-home-active-navigate">
          <div className="arrow-right"></div>
          <button
            onClick={() => {
              history.push(`${link}`);
            }}
          >
            view
          </button>
        </div>

        <div>
          <button onClick={moveLeft} disabled={moveState === 0}>
            left
          </button>
          <button
            onClick={moveRight}
            disabled={
              jobs.length <= 3
                ? true
                : jobs.length === 4 && moveState === 1
                ? true
                : jobs.length === 5 && moveState === 1
                ? true
                : jobs.length >= 6 && moveState === 2
                ? true
                : false
            }
          >
            right
          </button>
          <p>{jobs.length}</p>
          <p>{moveState}</p>
        </div>
      </div>

      <JobCarousel jobs={jobs} moveState={moveState} />
    </div>
  );
}

export default JobFeature;
