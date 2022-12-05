import { CREATE_TODO, DELETE_TODO, DONE_TODO } from "./types"
import { TodosState, TodosAction } from "../type"

const initialState: TodosState = {
  todos: [],
}

export const todosReducer = (state=initialState, action: TodosAction ) => {
  switch(action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
        // posts: state.posts.concat(action.payload)
      }
    
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.id !== action.payload.id)
      }

    case DONE_TODO:
      return {
        ...state,
        todos: [...state.todos].map(todo => {
          let comletedVal = todo.completed
  
          if (todo.id === action.payload.id) {
            comletedVal = !todo.completed
          }
          
          return { 
            ...todo,
            completed: comletedVal
          }
        })
      }
    
    default: 
      return state
  }
}
