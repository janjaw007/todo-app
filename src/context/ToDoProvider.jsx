import { useReducer } from "react";
import { ToDoContext } from "./ToDoContext";

// 1 initState
const initialState = {
  isAddNewTask: false,
  toDo: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "AddNewTask":
      return { ...state, isAddNewTask: !state.isAddNewTask };
    case "toDo/POST":
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
      };
    default:
      return state;
  }
}

function ToDoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ToDoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
}

export default ToDoProvider;
