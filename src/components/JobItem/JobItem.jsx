import "./JobItem.css";
import { useDispatch } from "react-redux";
function JobItem({ width, owner, street, city, state, zip, price, date, id }) {
  const dispatch = useDispatch();

  const navigateHandler = () => {
    if (id) {
      dispatch({ type: "FETCH_JOB_DETAIL", payload: { id: id } });
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
      <button className="job-item-accept-button" onClick={navigateHandler}>
        <p>view</p>
      </button>
    </div>
  );
}

export default JobItem;
