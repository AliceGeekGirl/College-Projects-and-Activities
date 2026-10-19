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
          <h1>Aula React-Frontend</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
