import { useState } from 'react'
import './App.css'

function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
    
        <div>
          <Welcome name="Alice" />
        </div>
      </section>
    </>
  )
}

export default App
