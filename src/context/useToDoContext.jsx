import { useContext } from "react";
import { ToDoContext } from "./ToDoContext";

export function useToDoContext() {
  return useContext(ToDoContext);
}
