import React, { useState, useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

let nextId = 0;

const InputForm = (props) => {
  const [error, setError] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useContext(TaskListContext);

  const handleEvent = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = () => {
    if (taskName !== "") {
      setTaskList([...taskList, { id: nextId, value: taskName }]);
      nextId++;
      setTaskName("");
      setError("");
    } else {
      setError("Task cannot be empty");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row m-1">
        <div className="offset-2 col-6 ">
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            aria-label="Task Name"
            value={taskName}
            aria-describedby="button-addon2"
            onChange={handleEvent}
          />
          <>{error !== "" ? <>{error}</> : <></>}</>
        </div>

        <div className="col-2">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
