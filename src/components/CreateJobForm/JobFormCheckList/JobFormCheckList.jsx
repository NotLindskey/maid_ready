import "./JobFormCheckList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CompletionModal from "../../KeeperJobCompletion/CompletionModal/CompletionModal";

function JobFormCheckList({ standards }) {
  const dispatch = useDispatch();
  const cleaningStandard = useSelector(
    (store) => store.job.cleaning_standard_checklist
  );

  const [checkedValues, setCheckedValues] = useState(
    standards.reduce((arr, task) => [...arr, task.task], [])
  );

  const [customValues, setCustomValues] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleButtonClick() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((val) => val !== value));
    }

    // console.log(checkedValues); // Outputs an array of the checked values
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
              id={`standard-${standard.id}`}
            />
            <label for={`standard-${standard.id}`}>{standard.task}</label>
          </div>
        );
      })}

      <div className="checklist-custom">
        <button onClick={handleButtonClick} className="btn" type="button">
          add task
        </button>
      </div>

      <CompletionModal
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
        title="add task"
      >
        <div
          style={{
            width: "40rem",
            height: "7rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="input-container">
            <input
              type="text"
              id="username"
              className="text-input"
              autocomplete="off"
              placeholder="Enter task"
              required
            />
            <label for="username" className="label">
              Enter task
            </label>
          </div>
          <button>add</button>
        </div>
      </CompletionModal>
    </div>
  );
}

export default JobFormCheckList;
