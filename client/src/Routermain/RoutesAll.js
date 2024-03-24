import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import User from '../Components/User'
import AddFriend from '../Components/AddFriend'
import Login from '../Components/Login'
<<<<<<< HEAD
import Settings from '../Components/Settings'
import Contact from "../Components/Contact"
import About from "../Components/About"
=======
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30

const RoutesAll = () => {
  return (
    <>
    <Routes>
        <Route path="/user" element={<User/>}></Route>
<<<<<<< HEAD
        <Route path="/user/:name" element={<User/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/user/Add-Friend' element={<AddFriend/>}></Route>
        <Route path='/setting' element={<Settings/>}></Route>
        <Route path='/Contact' element={<Contact/>} ></Route>
        <Route path='/About' element={<About/>} ></Route>
=======
        <Route path='/' element={<Login/>}></Route>
        <Route path='/user/Add-Friend' element={<AddFriend/>}></Route>
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
    </Routes>
    </>
  )
}

export default RoutesAll