import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Iphone from './iphone'

function App() {

  return (
    <div>
      <Iphone productname="iphone14" price={2500}/>
    </div>
  )
}

export default App
