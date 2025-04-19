import ListItem from "./ListItem";

function List() {
  return (
    <ul className=" bg-amber-500 flex flex-col items-center gap-5 py-5 rounded-md overflow-auto max-h-11/12">
      <ListItem />
      <ListItem />
    </ul>
  );
}

export default List;
