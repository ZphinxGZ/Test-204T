import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <h1>Hello World Web App</h1>
      <h2>Kunakorn 66075070</h2>

      <button onClick={toggleDarkMode}>Change Color</button>
    </div>
  )
}

export default App
