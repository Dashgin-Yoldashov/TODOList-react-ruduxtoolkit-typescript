import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate.jsx'
import TodoList from './components/TodoList.jsx';
function App() {
  const[todos,setTodos]=useState([]);
  let TodoCreat= (newtodo)=>{
    setTodos([...todos,newtodo]);
  }
  const remove=(todoid)=>{
    setTodos([...todos.filter((todo)=> todo.id!==todoid)]); 
   }
 
  return (
    <>
     <TodoCreate onTodoCreate={TodoCreat}/>
     <TodoList todos={todos} onRemove={remove}/>
    </>
  )
}

export default App
