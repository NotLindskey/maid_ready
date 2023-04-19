import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./JobItemButton.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function JobItemButton({ status, claimed, keeper, id }) {
  useEffect(() => {
    // console.log(`
    //     status: ${status} \n
    //     clamied: ${claimed} \n
    //     keeper: ${keeper} \n
    //     type: ${userType}
    //     `);
  });
  const userType = useSelector((store) => store.user.account_type);

  const history = useHistory();

  const navigateHandler = () => {
    if (id) {
      history.push(`/keeper/job/details/${id}`);
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
