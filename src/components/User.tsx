import React from 'react'
export interface todo {
  value: string;
}

interface userTodoProps {
  userTodo: todo[];
  setUserTodo: React.Dispatch<React.SetStateAction<todo[]>>;
}

export default function User({userTodo} : userTodoProps) {
  return (
    <>
      <div className="w-[70%] mt-5 p-4 text-xl mr-5 grid gap-5">
        {userTodo.map((item) => {
          return <p className="shadow-md p-5 w-[100%]">{item.value}</p>
        })}
      </div>
    </>
  )
}
