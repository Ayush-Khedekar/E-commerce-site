import React from "react";

export interface input {
  value: string;
  type: string;
  id: number;
}

export interface props {
  inputVal: input[];
  setInputVal: React.Dispatch<React.SetStateAction<input[]>>;
  click: () => void;
  isEdit: boolean;
}

export default function Input({ inputVal, setInputVal, click, isEdit }: props) {
  return (
    <div className="flex justify-center p-3 gap-3">
      {inputVal.map((EachInput) => (
        <input
          key={EachInput.id}
          className="p-2 w-[25%] outline-none hover:border-b-1 hover:border-b-blue-900 cursor-pointer"
          type={EachInput.type}
          value={EachInput.value}
          placeholder="Enter a task"
          onChange={(e) => {
            const newValue = e.target.value;
            setInputVal((prevVal) =>
              prevVal.map((item) =>
                item.id === EachInput.id ? { ...item, value: newValue } : item
              )
            );
          }}
        />
      ))}

      <button
        className="shadow-md rounded-[7px] p-2 hover:bg-blue-300 cursor-pointer"
        onClick={click}
      >
        {isEdit ? "Save Task" : "+ Add Task"}
      </button>
    </div>
  );
}
