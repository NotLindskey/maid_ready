import styles from "./KeeperActivityPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function KeeperActivityPage() {
  const dispatch = useDispatch();
  const userJobs = useSelector((store) => store.job.user_jobs);

  useEffect(() => {
      dispatch({ type: "FETCH_USER_JOBS" });
  }, []);

  return (
    <div className="keeper-activity-page-body">
      <div className="keeper-activity-active"></div>
      <div className="keeper-activity-accepted"></div>
      <div className="keeper-activity-previous"></div>
    </div>
  );
}

export default KeeperActivityPage;
