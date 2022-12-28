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
      {/* -------------------------------------------------------------------------------------- */}

      {/*  //TODO show data through show list file. */}

      <div className="text-center">Todo List Items:</div>

      <div className="container-fluid">
        {taskList.map((item) => {
          return (
            <div className="row m-2">
              <li className="col-6" key={item.id}>
                {item.value}
              </li>
              {/* border border-secondary rounded */}
              <div className="col-6 text-end">
                <button
                  className="btn btn-outline-success btn-sm m-1"
                  onClick={() => {
                    setTaskList(taskList.filter((a) => a.id !== item.id));
                  }}
                >
                  Complete
                </button>

                <button
                  className="btn btn-outline-danger btn-sm m-1"
                  onClick={() => {
                    setTaskList(taskList.filter((a) => a.id !== item.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
