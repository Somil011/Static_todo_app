import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./Components/TodoApp";
function App() {
  const [data, setdata] = useState([
    { id: 1, title: "Task 1" },
    { id: 1, title: "Task 2" },
    { id: 1, title: "Task 3" },
  ]);

  return (
    <>
      <TodoApp data={data} />
    </>
  );
}

export default App;
