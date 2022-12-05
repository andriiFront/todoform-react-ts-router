export interface ITodo {
  title: string
  id: number
  completed: boolean
}

export type TodosState = {
  todos: Itodo[] | []
}

export type TodosAction = {
  type: string
  payload: ITodo
}
