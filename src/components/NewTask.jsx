import { useContext, useRef, useEffect } from "react";
import { AddNewTaskContext } from "../context/AddNewTaskContext";

function NewTask() {
  const { isAddNewTask } = useContext(AddNewTaskContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isAddNewTask && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddNewTask]);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.value === "") return;
  }

  return (
    <form
      className="space-x-4 my-1.5 text-center flex items-center flex-wrap "
      onSubmit={handleSubmit}
    >
      <label
        name="task"
        className="bg-amber-950 px-2 py-1 rounded-md capitalize font-bold text-stone-200"
      >
        task name
      </label>
      <input
        ref={inputRef}
        type="text"
        className="bg-amber-50 rounded-3xl text-lg py-1 px-3 "
        name="task"
      />
      <button
        type="submit"
        className="bg-amber-400 px-3.5 py-1.5 rounded-md capitalize font-bold text-stone-700"
      >
        submit
      </button>
    </form>
  );
}

export default NewTask;
