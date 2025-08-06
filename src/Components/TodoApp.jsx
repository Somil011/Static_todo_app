import { useState } from "react";
import "../style/todo.css";
import Tolist from "./Tolist";
const TodoApp = ({data}) => {
  return (
    <>
      <h1>Add your task here</h1>
      <ul className="title">
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <ul></ul>
    </>
  );
};
export default TodoApp;
