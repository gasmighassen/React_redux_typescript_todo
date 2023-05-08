import * as React from "react";
import { Todo, TodoState } from "../redux/types/types";
import { useEffect } from "react";
import { todoAction } from "../redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
function TodoList() {
  const dispatch = useDispatch();
  const { getTodos, deleteTodo } = bindActionCreators(todoAction, dispatch);

  useEffect(() => {
    getTodos();
  }, []);

  const todoList = useSelector(
    (state: { todos: TodoState }) => state.todos.todos
  );
  console.log(todoList);
  return (
    <div>
      {todoList &&
        todoList.map((el: Todo) => (
          <h3>
            {el.text}
            {/* <button onClick={() => deleteTodo(el.id)}>Delete</button> */}
          </h3>
        ))}
    </div>
  );
}

export default TodoList;
