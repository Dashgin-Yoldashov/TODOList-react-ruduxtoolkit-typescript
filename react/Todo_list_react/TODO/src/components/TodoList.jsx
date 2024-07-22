import React from 'react'
import Todo from './Todo'

function TodoList({todos, onRemove}) {
  return (
    <div>
      {
        todos && todos.map((todo)=>(
            <Todo key={todo.id} todo={todo} onremove={onRemove}/>
        ))
      }
    </div>
  )
}

export default TodoList
