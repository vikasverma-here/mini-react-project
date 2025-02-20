import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { useState } from 'react'
const App = () => {

  const [input, setinput] = useState("")
console.log(input)
  return (
    <div>
      <div className="header">
        <Navbar input={input} setinput={setinput} />
      </div>
     <div className="hero">
      <Hero input={input} setinput={setinput} />
     </div>
    </div>
  )
}

export default App
