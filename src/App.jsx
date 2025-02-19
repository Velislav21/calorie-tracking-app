import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navigation/Navbar'
import Login from './components/login/Login'
import Register from './components/register/Register'
import './reset.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/create" element={<Create />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
