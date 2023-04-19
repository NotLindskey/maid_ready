import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./JobItemButton.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function JobItemButton({ status, claimed, keeper, id }) {
  const user = useSelector((store) => store.user);

  const history = useHistory();

  const navigateHandler = () => {
    if (id && user.account_type === "keeper") {
      if (claimed) {
        if (user.id === keeper) {
          if (status === "incomplete") {
            history.push(`/keeper/job/details/complete/${id}`);
          } else {
            history.push(`/keeper/job/details/${id}`);
          }
        }
      } else if (!claimed) {
        if (keeper === null) {
          if (status === "incomplete") {
            history.push(`/keeper/job/details/${id}`);
          }
        }
      }
    }
  };

  return (
    <div>
      <button className="btn job-item-accept-button" onClick={navigateHandler}>
        view
      </button>
    </div>
  );
}

export default JobItemButton;
