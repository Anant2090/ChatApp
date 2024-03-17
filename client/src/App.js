<<<<<<< HEAD
import abi from './a.json'
import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import Login from './Components/Login';
import { useNavigate } from 'react-router-dom';
import './App.css';
import RoutesAll from "./Routermain/RoutesAll"
import User from "./Components/User"
function App() {
  const navigate=useNavigate();
  function Handle_Metamsk_Acc_change()
  {
    navigate("/");
  }
  useEffect(()=>{
     window.ethereum.on("accountsChanged",Handle_Metamsk_Acc_change);
  },[])
  
  return (

    <>
    {/* <Login/> */}
    <RoutesAll/>
    
    {/* <User/> */}
=======
import logo from './logo.svg';
import Login from "./Components/Login/Login"
import CContext from './Context/TransactionContext';
import './App.css';
import User from './Components/User/User';

function App() {
  return (
    <>
    <CContext>
    <div className='login'><Login /></div>
    <User/>
    </CContext>
>>>>>>> d5cace5529400098ae66e30bd99e970f051e99b0
    </>
  );
}

export default App;
