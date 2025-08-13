import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">

        </a>
        <a href="https://react.dev" target="_blank">

        </a>
      </div>
      <h1> GuitarLa Start</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>

        </p>
      </div>

    </>
  )
}

export default App
