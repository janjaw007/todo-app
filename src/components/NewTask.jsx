import { useRef, useEffect } from "react";
import { useToDoContext } from "../context/useToDoContext";
function NewTask() {
  const { isAddNewTask, dispatch } = useToDoContext();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isAddNewTask && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddNewTask]);

  function handleSubmit(e) {
    e.preventDefault();
    const task = inputRef.current.value.trim();
    if (task === "") return;

    dispatch({ type: "toDo/POST", payload: task });

    inputRef.current.value = "";
  }

  return (
    <form
      className="space-x-4 my-1.5 text-center flex items-center flex-wrap"
      onSubmit={handleSubmit}
    >
      <label
        name="task"
        className="bg-amber-950 px-2 py-1 rounded-md capitalize font-bold text-stone-200"
      >
        task name
      </label>
      <div className="ml-auto flex mt-2 md:mt-0  grow gap-3 ">
        {" "}
        <input
          ref={inputRef}
          type="text"
          className="bg-amber-50 rounded-3xl text-lg py-1 px-4 grow  "
          name="task"
        />
        <button
          type="submit"
          className="bg-amber-400 px-3.5 py-1.5 rounded-md capitalize font-bold text-stone-700 "
        >
          submit
        </button>
      </div>
    </form>
  );
}

export default NewTask;
