import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import User from '../Components/User'
import AddFriend from '../Components/AddFriend'
import Login from '../Components/Login'

const RoutesAll = () => {
  return (
    <>
    <Routes>
        <Route path="/user" element={<User/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/user/Add-Friend' element={<AddFriend/>}></Route>
    </Routes>
    </>
  )
}

export default RoutesAll