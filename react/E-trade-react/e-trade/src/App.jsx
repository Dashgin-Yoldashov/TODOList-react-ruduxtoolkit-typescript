import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Sell from './pages/Sell'
import Rent from './pages/Rent'
import Buy from './pages/Buy'
import Basket from './pages/Basket';
import CardDetails from './pages/CardDetails'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/rent' element={<Rent/>}/>
        <Route path='/badge' element={<Basket/>}/>
        <Route path='/card-details/:prodid' element={<CardDetails/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
