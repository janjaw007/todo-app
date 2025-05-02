import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

function ListItem({ task, date }) {
  return (
    <li className="bg-amber-100 rounded-md w-11/12 px-4 py-1.5 flex items-center justify-between ">
      <div className="flex gap-4">
        <input type="checkbox" className="w-6.5" name="" id="" />
        <div className="flex flex-col">
          <div>{task}</div>
          <div>{date}</div>
        </div>
      </div>
      <div className="flex gap-4">
        <PencilSquareIcon className="size-7 text-blue-500" />
        <TrashIcon className="size-7 text-red-400" />
      </div>
    </li>
  );
}

export default ListItem;
