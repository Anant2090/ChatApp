import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import user from "../assets/user.png";
import submit from "../assets/send.png";
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
          className="flex items-center mt-5 ml-[150px] justify-around text-[25px] bg-[#161A26] rounded-md p-2   w-[200px]"
        >
          <img className="h-10 w-10 " src={submit} alt="" />
          <div className="text-[#e7730d]">Register</div>
          
          
        </button>)}
        <hr className="mt-5 w-[500px]" />
        <h1 className="text-[50px] text-center w-[500px]  font-bold text-[#e7730d]">
          OR
        </h1>
        <button
          onClick={async () => {
            await login("main");
            if (navi === true) {
              navigate("/user");
            } else {
              navigate("/");
            }
          }}
          className="flex items-center mt-5 ml-[150px] justify-around text-[25px] bg-[#161A26] rounded-md p-2   w-[200px]"
        >
          <img className="h-10 w-10 " src={submit} alt="" />
          <div className="text-[#e7730d]">Login</div>
        </button>
      </div>
    </div>
  );
};

export default Login;
