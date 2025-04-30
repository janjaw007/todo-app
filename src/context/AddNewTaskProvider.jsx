import { useState } from "react";
import { AddNewTaskContext } from "./AddNewTaskContext";

function AddNewTaskProvider({ children }) {
  const [isAddNewTask, setIsAddNewTask] = useState(false);

  return (
    <AddNewTaskContext.Provider value={{ isAddNewTask, setIsAddNewTask }}>
      {children}
    </AddNewTaskContext.Provider>
  );
}

export default AddNewTaskProvider;
