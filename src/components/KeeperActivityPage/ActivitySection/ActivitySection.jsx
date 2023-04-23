import JobItem from "../../JobItem/JobItem";
import { useState } from "react";
function ActivitySection({ title, jobs, isActive }) {
  const [indexValueShow, setIndexValueShow] = useState(2);
  return (
    <div className="activity-section-body">
      <div className="activity-section-title">
        {isActive && <div className="keeper-home-active-dot"></div>}
        <p>{title} :</p>
      </div>
      <div className="activity-section-job-item">
        {jobs.map((job, index) => {
          if (index < indexValueShow) {
            return (
              <JobItem
                // defeault value
                key={job.id}
                // display option
                id={job.id}
                owner={job.username}
                street={job.street}
                city={job.city}
                state={job.state}
                zip={job.zipcode}
                price={job.price}
                date={job.date_completed_by}
                // button
                claimed={job.claimed}
                status={job.status}
                keeper_id={job.keeper_id}
                width={60}
              />
            );
          }
        })}
        {/* {jobs ? (=
          jobs.length > 0 ?
          {
            jobs.map((jobs)=>{return()})
          } : (
            <p>no jobs found</p>
          )
        ) : (
          <p>no jobs found</p>
        )} */}
      </div>
    </div>
  );
}

export default ActivitySection;
