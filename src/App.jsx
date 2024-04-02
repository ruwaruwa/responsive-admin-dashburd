import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashbourd from './components/Dashbourd'
// import { Dashboard } from '@mui/icons-material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Sidebar/> */}
      <Dashbourd/>
    </>
  )
}

export default App
