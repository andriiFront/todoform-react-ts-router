import { ITodo } from "../type"
import { CREATE_TODO, DELETE_TODO, DONE_TODO } from "./types"

export function createTodo(todo: ITodo) {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}

export function deleteTodo(todo: ITodo) {
  return {
    type: DELETE_TODO,
    payload: todo
  }
}

export function doneTodo(todo: ITodo) {
  return {
    type: DONE_TODO,
    payload: todo
  }
}
