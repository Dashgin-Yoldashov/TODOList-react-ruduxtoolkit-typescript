import {createSlice } from '@reduxjs/toolkit'


const initialState = {
    counter: 1,
}

export const counterSlice = createSlice({
    name: "count",
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter+=1;
        },
        decrement:(state)=>{
            if (state.counter>1) {
                state.counter-=1;
                
            }
        }
    }
})

export const{increment,decrement}=counterSlice.actions
export default counterSlice.reducer