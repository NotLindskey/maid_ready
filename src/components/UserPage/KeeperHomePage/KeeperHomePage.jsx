import "./KeeperHomePage.css";
import JobCarousel from "./JobCarousel/JobCarousel";
import JobItem from "../../JobItem/JobItem";
import JobFeature from "./JobFeature/JobFeature";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function KeeperHomePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userJobs = useSelector((store) => store.job.user_jobs);
  const activeJobs = useSelector((store) => store.job.keeper_active_jobs);
  useEffect(() => {
    dispatch({ type: "FETCH_USER_JOBS" });
    dispatch({ type: "FETCH_ACTIVE_JOBS" });
  }, []);

  if (!userJobs) {
    return <p>loading</p>;
  }
  return (
    <div className="keeper-home-page-body">
      <div className="keeper-home-page-find-job-container">
        <button
          className="keeper-home-page-find-job-button btn"
          onClick={() => {
            history.push("/keeper/job-list");
          }}
        >
          <p>Find A Job</p>
        </button>
      </div>

      {/* conditonal rendering */}
      {/* active job */}
      {activeJobs.length ? (
        <div className="keeper-home-page-active-job">
          <div className="keeper-home-active-info">
            <div className="keeper-home-active-dot"></div>
            <p className="keeper-home-active-title">Active</p>
            <div className="keeper-home-active-navigate">
              <div className="arrow-right"></div>
              <button>view all activity</button>
            </div>
          </div>
          {activeJobs.map((job, index) => {
            if (index < 3) {
              return (
                <JobItem
                  width={60} // defeault value
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
                />
              );
            }
          })}
        </div>
      ) : (
        <div></div>
      )}

      {/* previous jobs */}
      <JobFeature
        title={"Previous Jobs"}
        link={"/keeper/activity"}
        jobs={userJobs.filter((job) => job.status !== "incomplete")}
      />

      {/* applied jobs */}
      <JobFeature
        title={"Accepted Jobs"}
        link={"/keeper/activity"}
        jobs={userJobs.filter((job) => job.status === "incomplete")}
      />
    </div>
  );
}

export default KeeperHomePage;
