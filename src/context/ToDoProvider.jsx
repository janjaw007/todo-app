import { useReducer } from "react";
import { ToDoContext } from "./ToDoContext";

// 1 initState
const initialState = {
  isAddNewTask: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "AddNewTask":
      return { isAddNewTask: !state.isAddNewTask };
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
