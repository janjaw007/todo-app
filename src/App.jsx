import Action from "./components/Action";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import AppLayout from "./ui/AppLayout";
import Main from "./ui/Main";

function App() {
  return (
    <AppLayout>
      <Header />
      <Main>
        <Action>
          <AddTask />
          <Filter />
        </Action>
        <List />
      </Main>
    </AppLayout>
  );
}

export default App;
