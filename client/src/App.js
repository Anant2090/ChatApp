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
    </>
  );
}

export default App;
