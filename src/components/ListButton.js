import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const ListButton = (props) => {
  const [taskList, setTaskList] = useContext(TaskListContext);
  return (
    <button
      className="btn btn-outline-success btn-sm m-1"
      onClick={() => {
        setTaskList(taskList.filter((a) => a.id !== props.item));
      }}
    >
      {props.name}
    </button>
  );
};

export default ListButton;
