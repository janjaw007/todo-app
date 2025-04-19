function ListItem() {
  return (
    <li className="bg-amber-100 rounded-md w-11/12 px-4 py-1.5 flex items-center justify-between ">
      <div className="flex gap-4">
        <input type="checkbox" className="w-6.5" name="" id="" />
        <div className="flex flex-col">
          <div>name</div>
          <div>date</div>
        </div>
      </div>
      <div className="flex gap-4">
        <div>hello1</div>
        <div>hello1</div>
      </div>
    </li>
  );
}

export default ListItem;
