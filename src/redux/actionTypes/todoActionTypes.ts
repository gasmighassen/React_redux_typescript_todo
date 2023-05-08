import { Todo } from "../types/types";

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAIL = "ADD_TODO_FAIL";

export const GET_TODO_REQUEST = "GET_TODO_REQUEST";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAIL = "GET_TODO_FAIL";

export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAIL = "UPDATE_TODO_FAIL";

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAIL = "DELETE_TODO_FAIL";

interface AddTodoRequestAction {
  type: typeof ADD_TODO_REQUEST;
}

interface AddTodoSuccessAction {
  type: typeof ADD_TODO_SUCCESS;
  payload: Todo;
}

interface AddTodoFailAction {
  type: typeof ADD_TODO_FAIL;
  payload: string;
}

interface GetTodoRequestAction {
  type: typeof GET_TODO_REQUEST;
}

interface GetTodoSuccessAction {
  type: typeof GET_TODO_SUCCESS;
  payload: Todo[];
}

interface GetTodoFailAction {
  type: typeof GET_TODO_FAIL;
  payload: string;
}

interface UpdateTodoRequestAction {
  type: typeof UPDATE_TODO_REQUEST;
}

interface UpdateTodoSuccessAction {
  type: typeof UPDATE_TODO_SUCCESS;
  payload: Todo;
}

interface UpdateTodoFailAction {
  type: typeof UPDATE_TODO_FAIL;
  payload: string;
}

interface DeleteTodoRequestAction {
  type: typeof DELETE_TODO_REQUEST;
}

interface DeleteTodoSuccessAction {
  type: typeof DELETE_TODO_SUCCESS;
  payload: string;
}

interface DeleteTodoFailAction {
  type: typeof DELETE_TODO_FAIL;
  payload: string;
}

export type TodoAction =
  | AddTodoRequestAction
  | AddTodoSuccessAction
  | AddTodoFailAction
  | GetTodoRequestAction
  | GetTodoSuccessAction
  | GetTodoFailAction
  | UpdateTodoRequestAction
  | UpdateTodoSuccessAction
  | UpdateTodoFailAction
  | DeleteTodoRequestAction
  | DeleteTodoSuccessAction
  | DeleteTodoFailAction;
