import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const[amount,setAmount]=useState(0);
  const[fromcurrency,setFromcurrency]=useState("TRY");
  const[toCurrency,setTocurrency]=useState("EUR");
  const[result,setResult]=useState(0);
    
  const Base_URL="https://api.freecurrencyapi.com/v1/latest";
  const Request_URL="fca_live_mWHg3LEEH8esKpx2Gpop7ilHT79CY7tJmbzH0eF2";
  const Default_Currency_URL="base_currency"

  const exchange = async()=>{
    let response= await axios.get(`${Base_URL}?apikey=${Request_URL}&${Default_Currency_URL}=${fromcurrency}`);
    let rslt=(response.data.data[toCurrency]*amount).toFixed(2);
    setResult(rslt);
  } 
  
  return (
    <>
     <div className='currency-body'>
      <div>
        <h2 >Currency Converter</h2>
      </div>

        <input type="number" onChange={(e)=>{setAmount((e.target.value))}}/>
        <select onChange={(e)=>{setFromcurrency(e.target.value)}} name="" id="" >
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <select onChange={(e)=>{setTocurrency(e.target.value)}} name="" id="">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="TRY">TRY</option>
        </select>

        <input type="number" onChange={(e)=>{setResult(e.target.value)}} value={(result)}/>
        <button onClick={exchange} className='btn btn-primary mt-4' style={{fontSize: '15px'}}>CONVERT</button>

     </div>
    </>
  )
}

export default App
