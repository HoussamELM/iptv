import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/middle.jsx"
import Navbar from './components/navbar.jsx';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
      <Routes>
        <Route path="/iptv/" element={<><Navbar/><Main/></>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
