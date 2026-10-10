import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './home'
import Form from './Component/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Home />
        <Form />
      </section>
    </>
  )
}

export default App
