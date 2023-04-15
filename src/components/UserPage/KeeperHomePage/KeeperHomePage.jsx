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
  // const userJobs = useSelector(store => store)

  useEffect(()=>{
    dispatch({type:"FETCH_USER_JOBS"});
  },[])
  return (
    <div className="keeper-home-page-body">
      <div className="keeper-home-page-find-job-container">
        <button className="keeper-home-page-find-job-button" onClick={()=>{history.push('/keeper/job-list')}}>
          <p>Find A Job</p>
        </button>
      </div>

      {/* conditonal rendering */}
      {/* active job */}
      <div className="keeper-home-page-active-job">
        <div className="keeper-home-active-info">
          <div className="keeper-home-active-dot"></div>
          <p className="keeper-home-active-title">Active</p>
          <div className="keeper-home-active-navigate">
            <div className="arrow-right"></div>
            <button>view all activity</button>
          </div>
        </div>
        <JobItem width={60} />
      </div>

      {/* previous jobs */}
      <JobFeature title={"Previous Jobs"} link={'/keeper/activity'}/>

      {/* applied jobs */}
      <JobFeature title={"Acepted Jobs"} link={'/keeper/activity'}/>
    </div>
  );
}

export default KeeperHomePage;
