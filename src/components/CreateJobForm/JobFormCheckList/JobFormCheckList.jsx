import "./JobFormCheckList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CompletionModal from "../../KeeperJobCompletion/CompletionModal/CompletionModal";

function JobFormCheckList({ standards }) {
  const dispatch = useDispatch();

  // values of cleaning standards (will show up in checklist)
  const [checkedValues, setCheckedValues] = useState(
    standards.reduce((arr, task) => [...arr, task.task], [])
  );

  // values of custom checklist items (not in checklist)
  const [customValues, setCustomValues] = useState([]);
  // values of custom checklist (will show up in checklist)
  const [customChecklist, setCustomChecklist] = useState([]);
  // value of input field of (Enter task)
  const [inputTask, setInputTask] = useState("");

  // modal state (false=closed)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // toggle modal functions
  // open modal
  function handleButtonClick() {
    setIsModalOpen(true);
  }
  // close modal
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  // standard checkbox value array (checklist that will show up (only standards))
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

  const handleNewTaskInput = () => {
    console.log(inputTask);

    setCustomValues([...customValues, inputTask.trim()]);
    setInputTask("");

    console.log(customValues);
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
            <label htmlFor={`standard-${standard.id}`}>{standard.task}</label>
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
          <div className="custom-task-input-container">
            <input
              type="text"
              id="custom-task"
              className="custom-task-checklist"
              style={inputTask ? { border: "1px solid blue" } : {}}
              autoComplete="off"
              placeholder="Enter task"
              value={inputTask}
              onChange={(e) => {
                setInputTask(e.target.value);
              }}
              required
            />
            <label
              htmlFor="custom-task"
              className="custom-task-label"
              style={
                inputTask
                  ? {
                      top: "-4px",
                      color: "blue",
                      backgroundColor: "white",
                      fontSize: "14px",
                    }
                  : {}
              }
            >
              Enter task
            </label>
          </div>
          <button onClick={handleNewTaskInput} type="button">
            add
          </button>
        </div>
      </CompletionModal>
    </div>
  );
}

export default JobFormCheckList;
