import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { TodoForm } from '../../Components/TodoForm';
import { TodoList } from '../../Components/TodoList';
import { createTodo, deleteTodo } from '../../store/actions'
import { doneTodo } from '../../store/actions'
import { ITodo, TodosState } from '../../type';

// declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
  // const [todos, setTodos] = useState<ITodo[]>([])
  
  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
  //   setTodos(saved)
  // }, [])

  // useEffect(() => (
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // ))
  
  const todos: ITodo[] = useSelector(
    (state: TodosState)=> state.todos
  )

  const dispatch = useDispatch()

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    dispatch(createTodo(newTodo))
  }

  const toggleHandler = (todo: ITodo) => {
    dispatch(doneTodo(todo))
  }

  const removeHandler = (todo: ITodo) => {
    const shouldRemove = window.confirm(
    // const shouldRemove = confirm(
      'Are you shure you want to delete the item?'
    )

    if (shouldRemove) {
      dispatch(deleteTodo(todo))
    }
  }
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  )
}
