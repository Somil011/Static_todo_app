import { useState } from "react";
import "../style/todo.css";
const TodoApp = ({ data, onAdd }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title });
    setTitle("");
  };
  return (
    <div className="bg-zinc-800 h-screen w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl">Add your task here</h1>
      <ul>
        {data.map((item) => (
          <li className="text-white" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      <form className="flex gap-4" action="#" onSubmit={handleSubmit}>
        <input
          className="bg-zinc-300 px-4 py-2 rounded-md w-70"
          type="text"
          value={title}
          placeholder="Add a new task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-zinc-400 cursor-pointer px-4 py-2 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default TodoApp;
