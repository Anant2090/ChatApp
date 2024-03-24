import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import user from "../assets/user.png";
<<<<<<< HEAD
import { FiSend } from "react-icons/fi";
import "./Glob.css"
import submit from "../assets/send.png";
import Block from "../assets/block.png"
=======
import submit from "../assets/send.png";
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
<<<<<<< HEAD
    Set_Current_Account_Username,
=======
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
<<<<<<< HEAD
        Set_Current_Account_Username(name);
=======
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
<<<<<<< HEAD
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
=======
    <div className="main h-[100vh] w-[100vw] flex justify-around items-center bg-[#1E2630]">
      <div>
        <img className="hero h-[90vh] w-[40vw] " src={hero} alt="" />
      </div>
      <div>
        <h1 className="welcome-text-1 text-[40px] leading-5 font-bold text-[#e7730d]">
          WELCOME TO{" "}
        </h1>
        <h1 className="welcome-text-2 text-[70px]  font-bold text-[#e7730d]">
          CHAT BUDDY
        </h1>
        <p className="w-[40vw]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          neque quidem expedita quod odit perspiciatis veritatis aspernatur
          alias sunt numquam doloribus itaque libero incidunt earum hic harum,
        </p>
        <br />
        <h2 className=" text-[20px] font-semibold text-[#e7730d] mb-5 ">
          Kindly Enter your UserName to register
        </h2>
        <div className="flex items-center rounded-[15px] overflow-hidden bg-[#161A26] w-[500px] ">
          <img className="h-5 w-5 ml-5" src={user} alt="" />
          <input
            className="inp p-3  w-[500px] ml-5 border-none text-[20px] text-[#8BA3AF] bg-[#161A26]"
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
<<<<<<< HEAD
          className="flex items-center mt-5 ml-[150px] justify-around text-[25px] bg-[#070814] rounded-md p-2   w-[200px]"
        >
          <img className="h-10 w-10 " src={submit} alt="" />
          <div className="text-[#f4ede8]">Register</div>
=======
          className="flex items-center mt-5 ml-[150px] justify-around text-[25px] bg-[#161A26] rounded-md p-2   w-[200px]"
        >
          <img className="h-10 w-10 " src={submit} alt="" />
          <div className="text-[#e7730d]">Register</div>
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
          
          
        </button>)}
        <hr className="mt-5 w-[500px]" />
<<<<<<< HEAD
        <h1 className="text-[50px] text-center w-[500px]  font-bold text-[#faf7f4]">
          OR
        </h1>
        <button
          onClick={ () => {
            login();
=======
        <h1 className="text-[50px] text-center w-[500px]  font-bold text-[#e7730d]">
          OR
        </h1>
        <button
          onClick={async () => {
            await login("main");
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
            if (navi === true) {
              navigate("/user");
            } else {
              navigate("/");
            }
          }}
<<<<<<< HEAD
          className="flex items-center mt-5 ml-[150px] justify-around text-[25px] bg-[#070814] rounded-md p-2   w-[200px]"
        >
          <img className="h-10 w-10 " src={submit} alt="" />
          <div className="text-[#ece1d7]">Login</div>
=======
          className="flex items-center mt-5 ml-[150px] justify-around text-[25px] bg-[#161A26] rounded-md p-2   w-[200px]"
        >
          <img className="h-10 w-10 " src={submit} alt="" />
          <div className="text-[#e7730d]">Login</div>
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
        </button>
      </div>
    </div>
  );
};

export default Login;
