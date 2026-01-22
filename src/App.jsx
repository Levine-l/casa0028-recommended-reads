import { useState } from 'react'
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

  
  return (
    <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
    <TitleBar title="📚 OpenPlaques Recommended Reading"/>
    <MapDisplay longitude={-2.78479} latitude={54.05213} zoom={16}/>
    {isModalOpen ?<PlaqueModal /> : null}
  </div>
  )
}

export default App
