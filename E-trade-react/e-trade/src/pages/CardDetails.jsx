// import React from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getProduct,setselectedProduct } from '../slices/productSlice';
import {decrement,increment} from '../slices/counterSlice';
import {addtoBasket} from '../slices/basketSlice'
import '../css/carddetails.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FiMinus, FiPlus } from "react-icons/fi";

function CardDetails() {
    let {prodid} = useParams();
    const dispatch= useDispatch();
    const {products, selectedProduct}=useSelector((store)=>store.product);
    const {description,id,image,price,title} = selectedProduct;
    useEffect(()=>{
    dispatch(getProduct());
  },[])
    const {counter}=useSelector((store)=>store.counter)

const addtobasket=()=>{
  const payload = {
    description,
    id,
    image,
    price,
    title,
    counter
  };
  dispatch(addtoBasket(payload));
}    
  return (
    <div>
      {
        products && products.map((item)=>{
          if (item.id==prodid) {
            dispatch(setselectedProduct(item));
            return(
              <div key={item.id}>
              <div className='card-details-body'>
                <div className="card-details">
              <div>
                <img className='image' src={image} alt="product-image" />
              </div>
              <div className='text-content'>
                <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                </div>
                <Stack className='stac' direction="column" spacing={2}>
                <div className="counter">
                <FiMinus onClick={() => dispatch(decrement())} className='counter-icon'/>
                  <span>{counter}</span>
                <FiPlus onClick={()=> dispatch(increment())} className='counter-icon'/>
                </div>
                <Stack direction="row" spacing={20}>
                <pre>{item.price*counter} $</pre>
                <Button onClick={addtobasket} variant="outlined" color="secondary">Add to Basket</Button>
                </Stack>
                </Stack>
              </div>

                </div>
              </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default CardDetails
