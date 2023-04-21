import "./JobFormCheckList.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CompletionModal from "../../KeeperJobCompletion/CompletionModal/CompletionModal";
import { MdArrowDropDown } from "react-icons/md";
import { BsPlusSquareFill } from "react-icons/bs";

function JobFormCheckList({
  standards,
  updateStandardChecklist,
  updateCustomChecklist,
}) {
  /* -------------------
    standard checklist
  ------------------- */
  // values of cleaning standards (will show up in checklist)
  const [checkedValues, setCheckedValues] = useState(
    standards.reduce((arr, task) => [...arr, task.task], [])
  );

  // standard checkbox value array (checklist that will show up (only standards))
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    let newCheckedValues;

    if (isChecked) {
      newCheckedValues = [...checkedValues, value];
    } else {
      newCheckedValues = checkedValues.filter((val) => val !== value);
    }

    setCheckedValues(newCheckedValues);
    updateStandardChecklist(newCheckedValues);
  };

  /* -------------------
    custom checklist
  ------------------- */
  // values of custom checklist items (not in checklist)
  const [customValues, setCustomValues] = useState([]);
  // values of custom checklist (will show up in checklist)
  const [customChecklist, setCustomChecklist] = useState([]);

  const handleCustomCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    let newCustomChecklist;

    if (isChecked) {
      newCustomChecklist = [...customChecklist, value];
    } else {
      newCustomChecklist = customChecklist.filter((val) => val !== value);
    }

    setCustomChecklist(newCustomChecklist);
    updateCustomChecklist(newCustomChecklist);
  };

  /* -------------------
    input state
  ------------------- */
  // value of input field of (Enter task)
  const [inputTask, setInputTask] = useState("");

  const handleNewTaskInput = () => {
    console.log(inputTask);
    let newCustomChecklist = inputTask;
    if (inputTask.trim().replace(/\s+/g, "")) {
      setCustomValues([...customValues, inputTask.trim()]);
      setCustomChecklist([...customChecklist, inputTask]);
      updateCustomChecklist([...customValues, newCustomChecklist]);
      setInputTask("");
      handleCloseModal();
    }

    // console.log(customValues);
  };

  /* -------------------
    toggle modal
  ------------------- */
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

  /* -------------------
    toggle standard 
  ------------------- */
  const [viewStandard, setViewStandard] = useState(true);
  const toggleStandardTasks = () => {
    setViewStandard(!viewStandard);
  };

  const [viewCustom, setViewCustom] = useState(true);
  const toggleCustomTasks = () => {
    setViewCustom(!viewCustom);
  };

  useEffect(() => {
    // dispatch({ type: "FETCH_CLEANING_STANDARD" });
    updateStandardChecklist(checkedValues);
  }, []);
  return (
    <div className="job-form-checklist-body">
      <div className="job-form-standard-body" style={{ borderBottom: "none" }}>
        <button
          type="button"
          onClick={toggleStandardTasks}
          className="job-form-standard-button"
        >
          <div className="job-form-button-title">
            <p>Standard Tasks</p>
          </div>
          <MdArrowDropDown
            size={25}
            className={
              !viewStandard
                ? `checklist-button-arrow checklist-arrow-show`
                : `checklist-button-arrow checklist-arrow-hide`
            }
          />
        </button>

        <div
          style={viewStandard ? { display: "none" } : {}}
          className="job-form-checklist-standard-main-body"
        >
          {standards.map((standard) => {
            return (
              <div
                key={standard.id}
                className="job-form-checklist-standard-body"
              >
                <input
                  className="job-form-checklist-standard-input"
                  type="checkbox"
                  value={standard.task}
                  checked={checkedValues.includes(standard.task)}
                  onChange={handleCheckboxChange}
                  id={`standard-${standard.id}`}
                />
                <label
                  htmlFor={`standard-${standard.id}`}
                  className="job-form-checklist-standard-label"
                >
                  {standard.task}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="job-form-custom-body">
        <button
          type="button"
          onClick={toggleCustomTasks}
          className="job-form-standard-button"
        >
          <div className="job-form-button-title">
            <p>Custom Tasks</p>
          </div>
          <MdArrowDropDown
            size={25}
            className={
              !viewCustom
                ? `checklist-button-arrow checklist-arrow-show`
                : `checklist-button-arrow checklist-arrow-hide`
            }
          />
        </button>
        <div
          className="job-form-custom-sub-body"
          style={viewCustom ? { display: "none" } : {}}
        >
          <div className="checklist-custom">
            <button
              onClick={handleButtonClick}
              className="job-form-custom-button"
              type="button"
            >
              <BsPlusSquareFill size={15} color="#4285F4" />
              <div className="mock-checkbox-title">
                <p>add tasks</p>
              </div>
            </button>
          </div>

          <div className="job-form-checklist-custom-list-body">
            {customValues.map((custom, index) => {
              return (
                <div key={index} className="job-form-checklist-standard-body">
                  <input
                    type="checkbox"
                    value={custom}
                    checked={customChecklist.includes(custom)}
                    onChange={handleCustomCheckboxChange}
                    id={`custom-${index}`}
                  />
                  <label htmlFor={`custom-${index}`}>{custom}</label>
                </div>
              );
            })}
          </div>
        </div>
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
          <button onClick={handleNewTaskInput} type="button" className="btn">
            add
          </button>
        </div>
      </CompletionModal>
    </div>
  );
}

export default JobFormCheckList;
