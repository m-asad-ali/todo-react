import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import ListButton from "./ListButton";

const ShowList = () => {
  const [taskList] = useContext(TaskListContext);

  return (
    <>
      <h3 className="text-center ">Todo List Items:</h3>

      <div className="container-fluid">
        {taskList.map((item) => {
          return (
            <div className="row m-2">
              <li className="col-6" key={item.id}>
                {item.value}
              </li>
              <div className="col-6 text-end">
                <ListButton type="success" name="Complete" item={item.id} />
                <ListButton type="warning" name="Delete" item={item.id} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowList;
