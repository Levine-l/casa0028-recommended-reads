//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import './tw-styles.css'
import TitleBar from './components/TitleBar.jsx'
import MapDisplay from './components/Mapdisplay.jsx'
import PlaqueModal from './components/PlaqueModal.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);

  /*function increment() {
    setCount(count + 1)/*Set the initial value to add one */
  //}
/*
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  */
  return (
    <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
    <TitleBar title="📚 OpenPlaques Recommended Reading"/>
    <MapDisplay longitude={-2.78479} latitude={54.05213} zoom={16}/>
    {isModalOpen ?<PlaqueModal /> : null}
  </div>
  )
}

export default App
