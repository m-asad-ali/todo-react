import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

export function TaskListProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <TaskListContext.Provider value={[taskList, setTaskList]}>
        {children}
      </TaskListContext.Provider>
    </>
  );
}
