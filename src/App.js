import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [str] = useState('Hello')
  return (
    <div className="App">
      <h1>{str}</h1>
    </div>
  )
}

export default App
