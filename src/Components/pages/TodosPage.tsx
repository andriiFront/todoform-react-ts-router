import React, { useState, useEffect } from 'react';
import { TodoForm } from '../../Components/TodoForm';
import { TodoList } from '../../Components/TodoList';
import { ITodo } from '../../interfaces';

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => (
    localStorage.setItem('todos', JSON.stringify(todos))
  ))

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...todos])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => (
      prev.map(todo => {
        let comletedVal = todo.completed

        if (todo.id === id) {
          comletedVal = !todo.completed
        }
        
        return { 
          ...todo,
          completed: comletedVal
        }
      })
    ))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm(
    // const shouldRemove = confirm(
      'Are you shure you want to delete the item?'
    )

    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
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
