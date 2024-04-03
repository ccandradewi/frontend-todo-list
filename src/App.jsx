import "./App.css";
import TodoList from "./component/Todolist/TodoList";
import Login from "./component/login/login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Todolist" element={<TodoList />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
