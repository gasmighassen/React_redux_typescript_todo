import React, { useState } from "react";
import { todoAction } from "../redux";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

function TodoAdd() {
  const dispatch = useDispatch();
  const { addTodo } = bindActionCreators(todoAction, dispatch);
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input placeholder="New todo" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
    </div>
  );
}

export default TodoAdd;
