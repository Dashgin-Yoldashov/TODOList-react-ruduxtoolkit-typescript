import * as React from 'react';
import { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../slices/productSlice';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard() {
  const dispatch= useDispatch();
    const {products}=useSelector((store)=>store.product);
    useEffect(()=>{
      dispatch(getProduct());
    },[])
    const navigate=useNavigate();
  return (
    <>
    <div style={{display:'flex', flexWrap:'wrap', margin:'30px 85px'}}>
    {products && products.map((item)=>(
      <div key={item.id} onClick={()=>navigate("/card-details/"+ item.id)}>
        {
          <Card sx={{ minWidth: 230, maxWidth:230, height:250, margin:2, borderRadius:2, boxShadow:'1px 1px 10px 1px DarkCyan',transition:'0.2s', ":hover":{transform:'scale(1.03)'}}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="product"
                sx={{objectFit:'contain', paddingTop:2}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize:12, textAlign:'center', fontFamily:'serif', height:50}}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="green" sx={{fontSize:15, textAlign:'center', width:200, fontWeight:700}}>
                  {item.price} $
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        }
      </div>
    ))}
    </div>
    </>
  );
}
