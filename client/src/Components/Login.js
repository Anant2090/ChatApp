import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import user from "../assets/user.png";
import { FiSend } from "react-icons/fi";
import "./Glob.css"
import submit from "../assets/send.png";
import Block from "../assets/block.png"
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContextApi";
import { useNavigate } from "react-router-dom";
import { Contract_ABI, Contract_Address } from "../Utils/context";
import { ethers } from "ethers";
import loader from "../assets/loader.gif";

import gsap from "gsap";
const Login = () => {
  const navigate = useNavigate();
  const [Loader,setLoader]=useState(false);
  const {
    navi,
    Connect,
    login,
    Current_Account_Username,
    Set_Current_Account_Username,
    get_acc_Address_Name,
  } = useContext(TransactionContext);
  async function register(name) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract_write = new ethers.Contract(
        Contract_Address,
        Contract_ABI,
        signer
      );
      (function () {
        setLoader(true);
     })();
      await contract_write.createAccount(name);
      setTimeout(() => {
        Connect();
        get_acc_Address_Name();
        Set_Current_Account_Username(name);
        setLoader(false);
        navigate("/user");      
      }, 5000);
    } catch (error) {
      alert(error);
      setLoader(false);
      navigate("/");
    }
  }

  return (
    <div className="main h-[100vh] w-[100vw] flex justify-around items-center bg-gradient-to-r from-[#04060E] to-[#271A62]">
      <div>
        
        <img className="rotate hero h-[63vh] w-[25vw] " src="https://canxium.org/images/work-process.png" alt="" />
      </div>
      <div>
        <h1 className="welcome-text-1 text-[40px] leading-5 font-bold text-[#e8e1db]">
          WELCOME TO{" "}
        </h1>
        <h1 className="welcome-text-2 text-[70px]  font-bold text-[#eae3de]">
          Block Gossip
        </h1>
        <p className="w-[40vw] text-white text-[20px]">
        Zero Trust Security <span className="text-[25px]">Chat</span> For The Real World
        </p>
        <br />
        <h2 className=" text-[20px] font-semibold text-[#e3ddd7] mb-5 ">
          Kindly Enter your UserName to register
        </h2>
        <div className="flex items-center rounded-[15px] overflow-hidden bg-[#070814] w-[500px] ">
          <img className="h-10 w-10 ml-5" src={user} alt="" />
          <input
            className="inp p-3  w-[500px] ml-5 border-none text-[20px] text-white bg-[#070814]"
            placeholder="Enter Your UserName"
            type="text"
            name=""
            id=""
          />
        </div>
        {Loader ? (<img className="h-[50px] w-[50px] ml-[230px] mt-5 mb-5" src={loader}></img>):(<button
          onClick={async () => {
            if (document.querySelector(".inp").value == "") {
              alert("You Must Enter Username To Register");
              return;
            } else {
              register(document.querySelector(".inp").value);
            }
          }}
          className="flex items-center mt-5 ml-[150px] justify-around text-[25px] bg-[#070814] rounded-md p-2   w-[200px]"
        >
          <img className="h-10 w-10 " src={submit} alt="" />
          <div className="text-[#f4ede8]">Register</div>
          
          
        </button>)}
        <hr className="mt-5 w-[500px]" />
        <h1 className="text-[50px] text-center w-[500px]  font-bold text-[#faf7f4]">
          OR
        </h1>
        <button
          onClick={ () => {
            login();
            if (navi === true) {
              navigate("/user");
            } else {
              navigate("/");
            }
          }}
          className="flex items-center mt-5 ml-[150px] justify-around text-[25px] bg-[#070814] rounded-md p-2   w-[200px]"
        >
          <img className="h-10 w-10 " src={submit} alt="" />
          <div className="text-[#ece1d7]">Login</div>
        </button>
      </div>
    </div>
  );
};

export default Login;
