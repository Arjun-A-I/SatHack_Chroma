import { useState } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Hero from './components/Hero';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        {/* <li></li>
        <li></li> */}
      </ul>
      <NavBar/>
      <Hero />
    </>
  )
}

export default App
