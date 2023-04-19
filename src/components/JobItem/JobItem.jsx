import "./JobItem.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import JobItemButton from "./JobItemButton/JobItemButton";
function JobItem({
  width,
  owner,
  street,
  city,
  state,
  zip,
  price,
  date,
  id,
  status,
  claimed,
  keeper_id,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const navigateHandler = () => {
    if (id) {
      history.push(`/keeper/job/details/${id}`);
    }
  };

  return (
    <div
      className="job-item-body"
      style={width ? { width: `${width}rem` } : {}}
    >
      <div className="job-item-name-address">
        <p>{owner ? owner : "John Smith"}</p>
      </div>
      <div>
        <p>
          {street} <br />
          {city}, {state} {zip}
        </p>
      </div>
      <div className="job-item-distance">
        <p>3.1 miles away</p>
      </div>
      <div className="job-item-due-date">
        <p>March 23 - March 28</p>
      </div>
      <div className="job-item-price">
        <p>${price}</p>
      </div>
      {/* <button className="job-item-accept-button btn" onClick={navigateHandler}>
        view
      </button> */}

      <JobItemButton
        status={status}
        claimed={claimed}
        keeper={keeper_id}
        id={id}
      />
    </div>
  );
}

export default JobItem;
