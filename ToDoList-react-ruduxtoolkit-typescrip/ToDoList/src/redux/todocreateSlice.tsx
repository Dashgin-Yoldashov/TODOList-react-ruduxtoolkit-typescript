import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { TodosType, TodoType } from "../types/types";

const initialState :TodosType ={
    todos: []
}
export const todocreateSlice = createSlice({
    name: 'todocreate',
    initialState,
    reducers: {
     createtodo:(state:TodosType,action:PayloadAction<TodoType>)=>{
        state.todos=[...state.todos,action.payload];
     },
     removetodo:(state:TodosType,action:PayloadAction<Number>)=>{
        state.todos=[...state.todos.filter((todo:TodoType)=>todo.id !== action.payload)]
     },
     edittodo:(state:TodosType,action:PayloadAction<TodoType>)=>{
        state.todos=[...state.todos.map((todo:TodoType)=>todo.id !== action.payload.id ? todo : action.payload)]
     }
    },
  })
  
  export const {createtodo, removetodo, edittodo} = todocreateSlice.actions
  
  export default todocreateSlice.reducer