import React from "react";

export interface todo {
  value: string;
}

interface todoProps {
  todo: todo[];
  setTodo: React.Dispatch<React.SetStateAction<todo[]>>;
  deleteClick: (index: number) => void;
  editClick: (index: number) => void;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  editIndex: number | null;
}

export default function Todo({
  todo,
  deleteClick,
  editClick,
  isEdit,
  editIndex,
}: todoProps) {
  return (
    <div className="w-[70%] mt-5 p-4 text-xl flex flex-col ml-5 gap-2">
      {todo.map((item, index) => (
        <div className="flex" key={index}>
          <p className="shadow-md p-5 w-[100%]">{item.value}</p>
          <button
            onClick={() => deleteClick(index)}
            className="shadow-md rounded-[7px] p-2 hover:bg-red-500 cursor-pointer"
          >
            Delete
          </button>
          <button
            onClick={() => editClick(index)}
            className="shadow-md rounded-[7px] p-2 hover:bg-green-500 cursor-pointer"
          >
            {editIndex === index && isEdit ? "Editing..." : "Edit"}
          </button>
        </div>
      ))}
    </div>
  );
}
