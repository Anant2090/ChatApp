import React, { useState } from "react";
import { createContext } from "react";
import { Contract_Abi, Contract_Address } from "../Utils/Constant";
import { ethers } from "ethers";

export const TransactionContext = React.createContext();

const CContext = ({ children }) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const [CurrUserAcc,SetCurrUserAcc]=useState("");
  const [CurrAcc, setCurrAcc] = useState("");
  const [CurrUserExist, SetCurrUserExist] = useState(false);

  async function connect() {
    try {
      if (!window.ethereum) {
        alert("Install Metamask on Your Browser");
      } else {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setCurrAcc(accounts[0]);
      }
    } catch (error) {
      alert(error);
    }
  }

  async function CheckConnection() {
    try {
      if (!window.ethereum) {
        alert("Install Metamask on Your Browser");
      } else {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        setCurrAcc(accounts[0]);
      }
    } catch (error) {
      alert(error);
    }
  }

  const WriteOnContract = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = fetchContract(signer);
      return contract;
    } catch (error) {
      console.log(error);
    }
  };

  function ConvertTime(time) {
    const newTime = new Date(Number(time));
    const realTime =
      newTime.getHours() +
      "/" +
      newTime.getMinutes() +
      "/" +
      newTime.getSeconds() +
      "  Date" +
      newTime.getDate() +
      "/" +
      newTime.getMonth() +
      "/" +
      newTime.getFullYear();

    return realTime;
  }

  const fetchContract = (SignerOrProvider) => {
    return new ethers.Contract(
      Contract_Address,
      Contract_Abi,
      SignerOrProvider
    );
  };

  async function CheckUserExists() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = fetchContract(signer);
    const ans = await contract.is_Registered();
    SetCurrUserExist(ans);
    return ans;
  }

  

  return (
    <div>
      <TransactionContext.Provider
        value={{
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
        }}
      >
        {children}
      </TransactionContext.Provider>
    </div>
  );
};

export default CContext;
