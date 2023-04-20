import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import JobFormCheckList from "./JobFormCheckList/JobFormCheckList";
function CreateJobForm(props) {
  const property = useSelector((store) => store.property.property);
  const cleaningStandard = useSelector(
    (store) => store.job.cleaning_standard_checklist
  );
  const [heading, setHeading] = useState("Create A Job");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [today, setToday] = useState(new Date().toJSON().slice(0, 10));
  const dispatch = useDispatch();
  const history = useHistory();
  let price = 0;

  const createJob = (event) => {
    event.preventDefault();

    const newJob = {
      price,
      date_completed_by: date,
      time,
      status: "incomplete",
      claimed: "FALSE",
      property_id: property.id,
    };
    dispatch({ type: "ADD_JOB", payload: newJob });
    history.push("/home");
  };

  const calculatePrice = () => {
    price = 0.08 * property.sq_footage;
    return price;
  };

  useEffect(() => {
    dispatch({ type: "FETCH_CLEANING_STANDARD" });
  }, []);

  if (!cleaningStandard.length) {
    return <p>loading</p>;
  }
  return (
    <div>
      <h2>{heading}</h2>
      <div className="job-form">
        <form onSubmit={createJob}>
          <p>Address:</p>
          <p>
            {property.street} {property.city} {property.state}{" "}
            {property.zipcode}
          </p>
          <p>{property.sq_footage} sq ft.</p>
          <p>Price: ${calculatePrice()}</p>
          <label htmlFor="date">Date Completed By:</label>
          <input
            value={date}
            min={today}
            onChange={(event) => setDate(event.target.value)}
            type="date"
          />
          <br />
          <label htmlFor="time">Time:</label>
          <input
            value={time}
            onChange={(event) => setTime(event.target.value)}
            type="time"
          />
          <br />
          <JobFormCheckList standards={cleaningStandard} />
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default CreateJobForm;
