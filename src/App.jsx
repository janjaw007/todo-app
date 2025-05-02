import Action from "./components/Action";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import AppLayout from "./ui/AppLayout";
import Main from "./ui/Main";
import NewTask from "./components/NewTask";
import { useContext } from "react";
import { ToDoContext } from "./context/ToDoContext";

function App() {
  const { isAddNewTask } = useContext(ToDoContext);

  return (
    <AppLayout>
      <Header />
      <Main>
        <Action>
          <AddTask />
          <Filter />
        </Action>
        {isAddNewTask && <NewTask />}

        <List />
      </Main>
    </AppLayout>
  );
}

export default App;
