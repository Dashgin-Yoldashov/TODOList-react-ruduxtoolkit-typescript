import React, { useState } from 'react'
import '../css/TodoCreate.css'
function TodoCreate({onTodoCreate}) {
  const[text,setText]=useState("");
  const CreateTodo=()=>{
    const todo={
      id: Math.floor(Math.random()*9999999),
      content: text
    };
    onTodoCreate(todo);
  }
  return (
    <>
    <div className="content">
    <div className='todocreate'>
      <input onChange={(e)=>{setText(e.target.value)}} placeholder='Click for write text!' className='forcreate' type="text" />
      <div className='create-btn'>
        <button onClick={CreateTodo} type='button' className='btn btn-secondary mt-3'>Create</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default TodoCreate
