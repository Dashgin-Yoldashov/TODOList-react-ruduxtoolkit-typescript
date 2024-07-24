import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

// const {counter}=useSelector((store)=>store.counter)

const getBasketfromStorage = () => {
    const basket = localStorage.getItem("basket");
    return basket ? JSON.parse(basket) : [];
};

const initialState={
    products: getBasketfromStorage(),
}

const setToLocalStorage = (basket)=>{
    localStorage.setItem("basket", JSON.stringify(basket));
}

export const basketSlice= createSlice({
    name:"basket",
    initialState,
    reducers:{
        addtoBasket:(state,action)=>{
            const findproduct = state.products && state.products.find((product)=>product.id === action.payload.id)
            if(findproduct){
                const filterproducts = state.products && state.products.filter((product)=>product.id !== action.payload.id);
                findproduct.counter+=action.payload.counter;
                state.products=[...filterproducts,findproduct];
            }
            else{
                state.products = [...state.products,action.payload];
            }
            setToLocalStorage(state.products);
        }
    }
})

export const {addtoBasket} = basketSlice.actions

export default basketSlice.reducer