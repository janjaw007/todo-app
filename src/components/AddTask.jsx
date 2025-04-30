import { useContext } from "react";
import { AddNewTaskContext } from "../context/AddNewTaskContext";

function AddTask() {
  const { setIsAddNewTask } = useContext(AddNewTaskContext);

  return (
    <div>
      <button
        onClick={() => setIsAddNewTask((prevState) => !prevState)}
        className="bg-amber-400 px-3.5 py-1.5 rounded-md capitalize font-bold text-stone-700"
      >
        add task
      </button>
    </div>
  );
}

export default AddTask;
