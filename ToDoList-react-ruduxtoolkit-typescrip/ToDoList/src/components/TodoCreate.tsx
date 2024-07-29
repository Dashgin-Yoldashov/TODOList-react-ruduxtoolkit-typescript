import { useDispatch } from 'react-redux'
import '../css/TodoCreate.css'
import { useState } from 'react'
import { TodoType } from '../types/types';
import {createtodo} from '../redux/todocreateSlice'
function TodoCreate() {
  const dispatch = useDispatch();
  const[text,setText]=useState<string>('')
  const HandleCreate=()=>{
    const payload:TodoType={
      id: Math.floor(Math.random()*99999999),
      content: text
    }
    dispatch(createtodo(payload))
  }
  return (
      <>
    <div className="content">
    <div className='todocreate'>
      <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setText(e.target.value)} placeholder='Click for write text!' className='forcreate' type="text" />
      <div className='create-btn'>
        <button onClick={HandleCreate} type='button' className='btn btn-secondary mt-3'>Create</button>
      </div>
    </div>
    </div>
      </>
  )
}

export default TodoCreate
