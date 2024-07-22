// import React from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getProduct } from '../slices/productSlice';
import '../css/carddetails.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function CardDetails() {
    let {id} = useParams();
    const dispatch= useDispatch();
    const {products}=useSelector((store)=>store.product);
      useEffect(()=>{
      dispatch(getProduct());
    },[])
  return (
    <div>
      {
        products && products.map((item)=>{
          if (item.id==id) {
            return(
              <>
              <div className='card-details-body'>
                <div className="card-details">
              <div>
                <img src={item.image} alt="product-image" />
              </div>
              <div className='text-content'>
                <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                </div>
                <Stack className='stac' direction="row" spacing={22}>
                <pre>{item.price} $</pre>
                <Button variant="outlined" color="secondary">Add to Basket</Button>

                </Stack>
              </div>

                </div>
              </div>
              </>
            )
          }
        })
      }
    </div>
  )
}

export default CardDetails
