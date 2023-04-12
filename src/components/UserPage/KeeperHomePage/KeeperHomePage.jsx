import "./KeeperHomePage.css";

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
      <div className="keeper-home-page-previous-job"></div>

      {/* applied jobs */}
      <div className="keeper-home-page-applied-job"></div>
    </div>
  );
}

export default KeeperHomePage;
