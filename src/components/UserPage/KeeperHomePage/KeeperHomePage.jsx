import "./KeeperHomePage.css";
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
      <div className="keeper-home-page-active-job"></div>

      {/* previous jobs */}
      <div className="keeper-home-page-previous-job">
        <JobFeature />
      </div>

      {/* applied jobs */}
      <div className="keeper-home-page-applied-job">
        <JobFeature />
      </div>
    </div>
  );
}

export default KeeperHomePage;
