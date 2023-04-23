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
        <ActivitySection jobs={activeJobs} title={"Active Jobs"} />
        <ActivitySection
          jobs={userJobs.filter((job) => job.status === "incomplete")}
          title={"Applied Jobs"}
        />
        <ActivitySection
          jobs={userJobs.filter((job) => job.status !== "incomplete")}
          title={"previous jobs"}
        />
      </div>
    </div>
  );
}

export default KeeperActivityPage;
