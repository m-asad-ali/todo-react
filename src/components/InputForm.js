import React, { useState } from "react";

let nextId = 0;

const Form = () => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");
  const [taskList, setTaskList] = useState([]);

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
      setError("task cannot be empty");
    }
  };

  console.log({ taskList });

  return (
    <div className="container-fluid p-5">
      <div className="row m-5">
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

      {/* show data */}

      <div>Task Name:{taskName}</div>
      <ul>
        {taskList.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Form;
