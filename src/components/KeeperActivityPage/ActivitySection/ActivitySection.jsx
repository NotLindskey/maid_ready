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
        {jobs.length ? (
          jobs.map((job, index) => {
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
          })
        ) : (
          <p>No Jobs</p>
        )}

        {indexValueShow < jobs.length && jobs.length > 2 ? (
          <button
            className="job-complete-show-more activity-section-show-more"
            onClick={() => {
              setIndexValueShow(jobs.length + 1);
            }}
          >
            Show more...
          </button>
        ) : indexValueShow > jobs.length && jobs.length > 2 ? (
          <button
            className="job-complete-show-more activity-section-show-more"
            onClick={() => {
              setIndexValueShow(2);
            }}
          >
            Show less...
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ActivitySection;
