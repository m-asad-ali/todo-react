import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const ShowList = () => {
  const [taskList, setTaskList] = useContext(TaskListContext);

  return (
    <div className="container-fluid ">
      <h3 className="text-center ">Todo List Items:</h3>
      <div className="container-fluid">
        {taskList.map((item) => {
          return (
            <div className="row m-2">
              <li className="col-6" key={item.id}>
                {item.value}
              </li>

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

export default ShowList;
