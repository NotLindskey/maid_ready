import { useEffect } from "react";
import "./JobItemButton.css";

function JobItemButton({ status, claimed, keeper, type }) {
  useEffect(() => {
    console.log(`
        status: ${status} \n
        clamied: ${claimed} \n
        keeper: ${keeper} \n
        type: ${type}
        `);
  });
  return (
    <button className="btn job-item-accept-button">condition button</button>
  );
}

export default JobItemButton;
