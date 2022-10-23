import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/middle"
import Navbar from './components/navbar';
import Essaie from "./components/essaie";
import Form from './components/form';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/iptv/" element={
          <>
            <Navbar />
            <Main />
          </>} />
        <Route path="/iptv/essaie" element={
          <>
            <Navbar />
            <Essaie />
          </>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
