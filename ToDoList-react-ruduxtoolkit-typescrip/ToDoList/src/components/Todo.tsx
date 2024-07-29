import { BiPencil } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import '../css/Todo.css'
import { TodoType } from "../types/types";
import { useDispatch } from "react-redux";
import { edittodo, removetodo } from "../redux/todocreateSlice";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";

interface todoProp{
  todoProps:TodoType
}


function Todo({todoProps}:todoProp) {
  const {id,content}=todoProps;
  const dispatch=useDispatch();
  const[edit,setEdit]=useState<boolean>(false);
  const[text,setText]=useState<string>(content);
  
  const HandleRemove=()=>{
    dispatch(removetodo(id))
  }
  const HandleEdit=()=>{
    const payload:TodoType ={
      id: id,
      content: text
    }
    dispatch(edittodo(payload));
    setEdit(false);
  }
  return (
    <>
    <div className='todo mt-5'>
        <RxCross2 onClick={HandleRemove} className='cross'/>
        <div className='todo-border'>
          {edit ? <input value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setText(e.target.value)} type="text" /> : <p>{content}</p>}
          {edit ? <BsCheckLg onClick={HandleEdit} className='icon'/> : <BiPencil onClick={()=>setEdit(true)} className='icon'/>}
        </div>
    </div> 
    </>
  )
}

export default Todo
