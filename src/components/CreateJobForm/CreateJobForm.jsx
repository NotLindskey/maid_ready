import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import JobFormCheckList from "./JobFormCheckList/JobFormCheckList";
import './CreateJobForm.css'

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

  // standard checklist
  const [standardChecklist, setStandardChecklist] = useState(cleaningStandard);
  // chain prop functions (standard checklist)
  const updateStandardChecklist = (checklist) => {
    setStandardChecklist(checklist);
  };

  // custom checklist
  const [customChecklist, setCustomChecklist] = useState([]);
  //chain prop functioin (custom checklist)
  const updateCustomChecklist = (checklist) => {
    setCustomChecklist(checklist);
  };

  const createJob = (event) => {
    event.preventDefault();

    const newJob = {
      price,
      date_completed_by: date,
      time,
      status: "incomplete",
      claimed: "FALSE",
      property_id: property.id,
      standard_checklist: standardChecklist,
      custom_checklist: customChecklist,
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
          <h3 className="overview-heading">Overview</h3>
          <p className="job-info">
            {property.street} {property.city} {property.state}{" "}
            {property.zipcode}
          </p>
          <p className="job-info"> {property.sq_footage} sq ft.</p>
          <p className="job-info">Price: ${calculatePrice()}</p>
          <label className="job-info" htmlFor="date">Date Completed By:</label>
          <input
            className="job-info"
            value={date}
            min={today}
            onChange={(event) => setDate(event.target.value)}
            type="date"
          />
          <br />
          <label className="job-info" htmlFor="time">Time:</label>
          <input
            className="job-info"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            type="time"
          />
          <br />
          <JobFormCheckList
            standards={cleaningStandard}
            updateStandardChecklist={updateStandardChecklist}
            updateCustomChecklist={updateCustomChecklist}
          />
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default CreateJobForm;
