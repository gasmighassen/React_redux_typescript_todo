import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

import React, { useEffect } from "react";

export function App() {


  return (
    <>
      <div>
        <TopBar />
        <TodoList />
        <TodoAdd />
      </div>
    </>
  );
}
