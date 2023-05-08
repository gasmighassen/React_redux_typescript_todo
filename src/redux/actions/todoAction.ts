import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import {
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
  TodoAction,
} from "../actionTypes/todoActionTypes";
import { Todo } from "../types/types";

export const getTodos = () => async (dispatch: Dispatch<TodoAction>) => {
  dispatch({ type: GET_TODO_REQUEST });
  try {
    const response = await axios.get("/todos");

    dispatch({
      type: GET_TODO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch({
        type: GET_TODO_FAIL,
        payload: error.response?.data.message || error.message,
      });
    }
  }
};

export const addTodo =
  (todo: string) => async (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: ADD_TODO_REQUEST });
    try {
      const response = await axios.post("/todos", todo);
      dispatch({
        type: ADD_TODO_SUCCESS,
        payload: response.data.todos,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({ type: ADD_TODO_FAIL, payload: error.message });
      }
    }
  };

export const updateTodo =
  (todo: Todo) => async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: UPDATE_TODO_REQUEST });
      const { data } = await axios.put(`/todos/${todo.id}`, todo);
      dispatch({ type: UPDATE_TODO_SUCCESS, payload: data });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: UPDATE_TODO_FAIL,
          payload: error.response?.data.message || error.message,
        });
      }
    }
  };

export const deleteTodo =
  (id: string) => async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: DELETE_TODO_REQUEST });
      const response = await axios.delete(`/todos/${id}`);
      dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: DELETE_TODO_FAIL,
          payload: error.response?.data.message || error.message,
        });
      }
    }
  };
