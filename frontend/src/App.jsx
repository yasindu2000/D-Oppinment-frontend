import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import About from './pages/About'
import Login from './pages/Login'
import MyOppoinment from './pages/MyOppoinment'
import MyProfile from './pages/MyProfile'
import Appoinment from './pages/Appoinment'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%] '>
      <NavBar/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/doctors' element={<Doctor/>} />
        <Route  path='/doctors/:speciality' element={<Doctor/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/my-appoinments' element={<MyOppoinment/>} />
        <Route  path='/appoinment/:docId' element={<Appoinment/>} />
        <Route  path='/my-profile' element={<MyProfile/>} />
      </Routes>
    </div>
  )
}

export default App