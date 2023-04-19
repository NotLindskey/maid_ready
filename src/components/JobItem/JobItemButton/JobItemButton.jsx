import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./JobItemButton.css";

function JobItemButton({ status, claimed, keeper }) {
  useEffect(() => {
    console.log(`
        status: ${status} \n
        clamied: ${claimed} \n
        keeper: ${keeper} \n
        type: ${userType}
        `);
  });

  const userType = useSelector((store) => store.user.account_type);
  return (
    <button className="btn job-item-accept-button">condition button</button>
  );
}

export default JobItemButton;
