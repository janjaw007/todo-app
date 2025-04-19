function Filter() {
  return (
    <div className="bg-stone-200 rounded-md ">
      <select className="px-4 py-1.5 capitalize font-bold text-stone-700">
        <option value="All">all</option>
        <option value="done">done</option>
        <option value="undone">undone</option>
      </select>
    </div>
  );
}

export default Filter;
