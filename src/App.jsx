import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import TodoApp from "./Components/TodoApp";
function App() {
  const [data, setdata] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ]);
  const addTasks = (newTask) => {
    setdata([...data, { id: Date.now(), ...newTask}]);
  };
  return (
    <>
      <TodoApp data={data} onAdd={addTasks} />
    </>
  );
}

export default App;
