import Action from "./components/Action";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import AppLayout from "./ui/AppLayout";
import Main from "./ui/Main";
import NewTask from "./components/NewTask";
import { useToDoContext } from "./context/useToDoContext";
function App() {
  const { isAddNewTask, toDo } = useToDoContext();
  console.log(toDo);

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
