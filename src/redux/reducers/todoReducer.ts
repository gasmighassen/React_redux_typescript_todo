import {
  TodoAction,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from "../actionTypes/todoActionTypes";
import { TodoState } from "../types/types";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
      };
    case ADD_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case GET_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_TODO_SUCCESS:
      const updatedTodo = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        loading: false,
      };
    case UPDATE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_TODO_SUCCESS:
      const deletedTodoId = action.payload;
      const remainingTodos = state.todos.filter(
        (todo) => todo.id !== deletedTodoId
      );
      return {
        ...state,
        todos: remainingTodos,
        loading: false,
      };
    case DELETE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default todoReducer;
