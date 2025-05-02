import { useToDoContext } from "../context/useToDoContext";

function AddTask() {
  const { dispatch } = useToDoContext();

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "AddNewTask" })}
        className="bg-amber-400 px-3.5 py-1.5 rounded-md capitalize font-bold text-stone-700"
      >
        add task
      </button>
    </div>
  );
}

export default AddTask;
