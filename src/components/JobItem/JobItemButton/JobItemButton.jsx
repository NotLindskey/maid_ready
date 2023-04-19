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
  const user = useSelector((store) => store.user);

  const history = useHistory();

  const navigateHandler = () => {
    if (id && user.account_type === "keeper") {
      if (claimed) {
        if (user.id === keeper) {
          if (status === "incomplete") {
            console.log("complete or cancel");
          } else {
            console.log("delete");
          }
        }
      } else if (!claimed) {
        if (keeper === null) {
          if (status === "incomplete") {
            console.log("apply");
          }
        }
      }

      //   history.push(`/keeper/job/details/${id}`);
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
