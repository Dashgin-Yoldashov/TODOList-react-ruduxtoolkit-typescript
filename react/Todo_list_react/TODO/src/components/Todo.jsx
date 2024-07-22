import React from 'react'
import { BiPencil } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import '../css/Todo.css'
function Todo({todo, onremove}) {
    const{id,content}=todo;
   const RemoveTodo=()=>{
    onremove(id);
   }
  return (
    <>
    <div className='todo mt-5'>
        <RxCross2 onClick={RemoveTodo} className='cross'/>
        <div className='todo-border'>
            <p>{content}</p>
            <BiPencil className='pencil'/>
        </div>
    </div> 
    </>
  )
}

export default Todo
