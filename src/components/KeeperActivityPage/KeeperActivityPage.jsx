import styles from "./KeeperActivityPage.css";
import ActivitySection from "./ActivitySection/ActivitySection";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function KeeperActivityPage() {
  const dispatch = useDispatch();
  const userJobs = useSelector((store) => store.job.user_jobs);
  const activeJobs = useSelector((store) => store.job.keeper_active_jobs);

  useEffect(() => {
    dispatch({ type: "FETCH_USER_JOBS" });
    dispatch({ type: "FETCH_ACTIVE_JOBS" });
  }, []);

  return (
    <div className="keeper-activity-page-body">
      <div className="keeper-activity-main">
        {activeJobs.length ? (
          <ActivitySection
            jobs={activeJobs}
            title={"Active Jobs"}
            isActive={true}
          />
        ) : (
          <div className="activity-section-body">
            <div className="activity-section-title">
              {true && <div className="keeper-home-active-dot"></div>}
              <p>Active Jobs :</p>
            </div>
            <p>no active jobs</p>
          </div>
        )}

        {userJobs.filter((job) => job.status === "incomplete").length ? (
          <ActivitySection
            jobs={userJobs.filter((job) => job.status === "incomplete")}
            title={"Accepted Jobs"}
          />
        ) : (
          <div className="activity-section-body">
            <div className="activity-section-title">
              <p>Accepted Jobs :</p>
            </div>
            <p>no accepted jobs</p>
          </div>
        )}

        {userJobs.filter((job) => job.status !== "incomplete").length ? (
          <ActivitySection
            jobs={userJobs.filter((job) => job.status !== "incomplete")}
            title={"Previous Jobs"}
          />
        ) : (
          <div className="activity-section-body">
            <div className="activity-section-title">
              <p>Previous Jobs :</p>
            </div>
            <p>no previous jobs</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default KeeperActivityPage;
