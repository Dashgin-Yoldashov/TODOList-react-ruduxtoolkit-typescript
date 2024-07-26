import React, { useEffect } from 'react'
import ActionAreaCard from '../MUI/CardUI'
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'
// import { getProduct } from '../slices/productSlice';
// import SimpleContainer from '../MUI/ContainerUI';

function card() {
    // const navigate = useNavigate();
    // const dispatch= useDispatch();
    // const {products}=useSelector((store)=>store.product);
    // useEffect(()=>{
    //   dispatch(getProduct());
    // },[])
    // console.log(products);
  return (
    <div>
      {/* <SimpleContainer> */}
        <ActionAreaCard/>
      {/* </SimpleContainer> */}
    </div>
  )
}

export default card
