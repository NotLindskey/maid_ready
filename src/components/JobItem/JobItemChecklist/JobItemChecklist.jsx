import { useState } from "react";
import { useDispatch } from "react-redux";
function JobItemChecklist({ job_checklist, checklist_type, jobId, pageType }) {
  const [indexValueStandard, setIndexValueStandard] = useState(7);
  const dispatch = useDispatch();
  return (
    <>
      <div className="job-detail-title">
        {checklist_type === "standard" ? (
          <p>Standard Tasks</p>
        ) : (
          <p>Custom Tasks</p>
        )}
      </div>

      {checklist_type === "standard" && (
        <div className="job-detail-checklist-container">
          {job_checklist.map((task, index) => {
            if (task.standard && index < indexValueStandard) {
              return (
                <div key={task.id} className="job-detail-checklist-main">
                  <input
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={() => {
                      if (pageType === "change") {
                        dispatch({
                          type: "CHECK_TASK",
                          payload: {
                            task_id: task.id,
                            job_id: jobId,
                            task_state: task.isComplete,
                          },
                        });
                      }
                    }}
                  />
                  <button
                    className="job-detail-checklist-button"
                    onClick={() => {
                      if (pageType === "change") {
                        dispatch({
                          type: "CHECK_TASK",
                          payload: {
                            task_id: task.id,
                            job_id: jobId,
                            task_state: task.isComplete,
                          },
                        });
                      }
                    }}
                  >
                    <div className="job-detail-checklist-title">
                      <p
                        style={
                          task.isComplete
                            ? {
                                textDecoration: "line-through",
                                color: "rgb(150,150,150)",
                              }
                            : {}
                        }
                      >
                        {task.task}
                      </p>
                    </div>
                  </button>
                </div>
              );
            }
          })}

          {indexValueStandard < job_checklist.length && (
            <button
              className="job-complete-show-more"
              onClick={() => {
                setIndexValueStandard(job_checklist.length + 1);
              }}
            >
              Show more...
            </button>
          )}

          {indexValueStandard > job_checklist.length && (
            <button
              className="job-complete-show-more"
              onClick={() => {
                setIndexValueStandard(8);
              }}
            >
              Show less...
            </button>
          )}
        </div>
      )}

      {checklist_type !== "standard" && (
        <div className="job-detail-checklist-container">
          {job_checklist.map((task, index) => {
            if (!task.standard) {
              return (
                <div key={task.id} className="job-detail-checklist-main">
                  <input
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={() => {
                      if (pageType === "change") {
                        dispatch({
                          type: "CHECK_TASK",
                          payload: {
                            task_id: task.id,
                            job_id: jobId,
                            task_state: task.isComplete,
                          },
                        });
                      }
                    }}
                  />
                  <button
                    className="job-detail-checklist-button"
                    onClick={() => {
                      if (pageType === "change") {
                        dispatch({
                          type: "CHECK_TASK",
                          payload: {
                            task_id: task.id,
                            job_id: jobId,
                            task_state: task.isComplete,
                          },
                        });
                      }
                    }}
                  >
                    <div className="job-detail-checklist-title">
                      <p
                        style={
                          task.isComplete
                            ? {
                                textDecoration: "line-through",
                                color: "rgb(150,150,150)",
                              }
                            : {}
                        }
                      >
                        {task.task}
                      </p>
                    </div>
                  </button>
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
}

export default JobItemChecklist;
