import "./JobFormCheckList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function JobFormCheckList({ standards }) {
  const dispatch = useDispatch();
  const cleaningStandard = useSelector(
    (store) => store.job.cleaning_standard_checklist
  );

  const [checkedValues, setCheckedValues] = useState(
    standards.reduce((arr, task) => [...arr, task.task], [])
  );

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((val) => val !== value));
    }

    console.log(checkedValues); // Outputs an array of the checked values
  };

  useEffect(() => {
    dispatch({ type: "FETCH_CLEANING_STANDARD" });
  }, []);
  return (
    <div>
      {standards.map((standard) => {
        return (
          <div key={standard.id}>
            <input
              type="checkbox"
              value={standard.task}
              checked={checkedValues.includes(standard.task)}
              onChange={handleCheckboxChange}
            />
            <label>{standard.task}</label>
          </div>
        );
      })}
    </div>
  );
}

export default JobFormCheckList;
