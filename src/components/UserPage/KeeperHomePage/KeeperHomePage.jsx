import "./KeeperHomePage.css";
import JobCarousel from "./JobCarousel/JobCarousel";
import JobItem from "../../JobItem/JobItem";
import JobFeature from "./JobFeature/JobFeature";
function KeeperHomePage() {
  return (
    <div className="keeper-home-page-body">
      <div className="keeper-home-page-find-job-container">
        <button className="keeper-home-page-find-job-button">
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
            <p>view all activity</p>
          </div>
        </div>
        <JobItem width={60} />
      </div>

      {/* previous jobs */}
      <JobFeature/>

      {/* applied jobs */}
      <JobFeature/>
    </div>
  );
}

export default KeeperHomePage;
