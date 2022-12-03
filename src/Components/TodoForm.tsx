import React, { useState, useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      // console.log(title);
      // setTitle('')
      props.onAdd(ref.current!.value);
      ref.current!.value = ''
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        ref={ref}
        onKeyPress={keyPressHandler}
        // value={title}
        type="text"
        id="title"
        placeholder="Enter toto's title"
      />
      <label htmlFor="title" className="active">
        Enter toto's title
      </label>
    </div>
  )
}
