import "./KeeperNav.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function KeeperNav() {
  const history = useHistory();
  return (
    <div className="keeper-nav-body">
      <button
        className="keeper-nav-button"
        onClick={() => {
          history.push("/keeper/activity");
        }}
      >
        Activity
      </button>
      <button
        className="keeper-nav-button"
        onClick={() => {
          history.push("/home");
        }}
      >
        Home
      </button>
      <button
        className="keeper-nav-button"
        onClick={() => {
          history.push("/keeper/job-list");
        }}
      >
        Jobs
      </button>
    </div>
  );
}

export default KeeperNav;
