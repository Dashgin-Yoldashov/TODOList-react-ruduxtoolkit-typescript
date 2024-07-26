import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Card from './components/card';
import Basket from './pages/Basket';
import CardDetails from './pages/CardDetails'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/badge' element={<Basket/>}/>
        <Route path='/card-details/:prodid' element={<CardDetails/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
