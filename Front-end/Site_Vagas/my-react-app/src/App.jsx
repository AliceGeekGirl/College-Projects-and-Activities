import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
    
        <div>
          <Welcome name="Alice" />
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Contador é {count}
        </button>
      </section>
    </>
  )
}

export default App
