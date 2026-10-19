import { useState } from 'react'
import './App.css'

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
