import React from 'react'
import { ITodo } from '../type'

type Props = {
  todos: ITodo[]
  onToggle(todo: ITodo): void
  onRemove: (todo: ITodo) => void
}

export const TodoList: React.FC<Props> = ({
  todos,
  onRemove,
  onToggle
}) => {

  if (typeof todos !== 'object') {
    return <p className='center'>There are no todos yet</p>
  }

  if (todos.length === 0) {
    return <p className='center'>There are no todos yet</p>
  }

  const removeHandler = (event: React.MouseEvent, todo: ITodo) => {
    event.preventDefault()
    onRemove(todo)
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
          classes.push('completed')
        }

        return (
           <li className={classes.join(' ')} key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={onToggle.bind(null, todo)}
                />
                <span>{todo.title}</span>
                <i
                  className="material-icons red-text"
                  onClick={(event) => removeHandler(event, todo)}
                >
                  delete
                </i>
              </label>
            </li>
        )
      })}
    </ul>
  )
}
