import React from "react";
import Input, { type input } from "./components/Input";
import User from "./components/User";
import Todo from "./components/Todo";

export default function App() {
  const [input, setInput] = React.useState<input[]>([
    {
      type: "text",
      value: "",
      id: 1,
    },
  ]);

  const [todo, setTodo] = React.useState([
    {
      value: "",
    },
  ]);

  const [userTodo, setUserTodo] = React.useState([
    {
      value: "",
    },
  ]);

  const [isEdit, setIsEdit] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState<number | null>(null);

  function click() {
    const inputValue = input[0].value.trim();

    if (!inputValue) return;

    if (isEdit && editIndex !== null) {
      // Edit existing item
      setTodo((prev) =>
        prev.map((item, idx) =>
          idx === editIndex ? { value: inputValue } : item
        )
      );
      setUserTodo((prev) =>
        prev.map((item, idx) =>
          idx === editIndex ? { value: inputValue } : item
        )
      );
      setIsEdit(false);
      setEditIndex(null);
    } else {
      // Add new item
      setTodo((prev) => [...prev, { value: inputValue }]);
      setUserTodo((prev) => [...prev, { value: inputValue }]);
    }

    // Clear input
    setInput((prev) =>
      prev.map((item) => ({
        ...item,
        value: "",
      }))
    );
  }

  function deleteClick(index: number) {
    setTodo((prevVal) => prevVal.filter((_item, i) => i !== index));
    setUserTodo((prevVal) => prevVal.filter((_item, i) => i !== index));

    // Cancel edit if the item being edited is deleted
    if (editIndex === index) {
      setIsEdit(false);
      setEditIndex(null);
      setInput((prev) =>
        prev.map((item) => ({
          ...item,
          value: "",
        }))
      );
    }
  }

  function editClick(index: number) {
    const itemToEdit = todo[index];
    if (!itemToEdit) return;

    setInput((prevVal) =>
      prevVal.map((item, i) =>
        i === 0 ? { ...item, value: itemToEdit.value } : item
      )
    );

    setEditIndex(index);
    setIsEdit(true);
  }

  return (
    <>
      <Input
        inputVal={input}
        setInputVal={setInput}
        click={click}
        isEdit={isEdit}
      />
      <div className="flex">
        <Todo
          todo={todo}
          setTodo={setTodo}
          deleteClick={deleteClick}
          editClick={editClick}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editIndex={editIndex}
        />
        <User userTodo={userTodo} setUserTodo={setUserTodo} />
      </div>
    </>
  );
}
