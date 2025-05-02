import ListItem from "./ListItem";
import { useToDoContext } from "../context/useToDoContext";
function List() {
  const { toDo } = useToDoContext();
  console.log(toDo);
  return (
    <ul className=" bg-amber-500 flex flex-col items-center gap-5 py-5 rounded-md overflow-auto max-h-11/12">
      {toDo.length === 0 ? (
        <p>Please Add Task 😊</p>
      ) : (
        toDo.map((task) => (
          <ListItem task={task.task} date={task.date} key={task.id} />
        ))
      )}
    </ul>
  );
}

export default List;
