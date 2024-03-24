import React, { useEffect } from 'react'
import { useContext } from "react";
import { TransactionContext } from "../../Context/TransactionContext";
import "./User.css"

const User = () => {
    const {
        CurrUserAcc,
        SetCurrUserAcc,
        connect,
        CheckConnection,
        WriteOnContract,
        ConvertTime,
        fetchContract,
        CheckUserExists,
        CurrAcc,
        CurrUserExist,
      } = useContext(TransactionContext);
      useEffect(()=>{
        
      })
  return (
    <div className='main-2'>
        <h1>{CurrUserAcc}</h1>

        

    </div>
  )
}

export default User