import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import username from "../assets/username.png";
import Chats from "./Chats";
import Chat from "./Chat";
import search from "../assets/search.png";
import { Route,Routes } from "react-router-dom";
import AddFriend from "./AddFriend";
import user from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContextApi";

const User = () => {
  
  const {  Connect, login,Current_Account,Current_Account_Username,get_acc_Address_Name } = useContext(TransactionContext);
  useEffect(()=>{
    get_acc_Address_Name();
  },[])
  const navigate =useNavigate()
  return (
    <div className="h-[100vh] w-[100vw] bg-[#1E2630] p-5">
      <div>
        <div className="Navbar flex items-center  flex-right gap-[40vw] mr-20  ">
          <img className="h-[60px] w-[60px] ml-10" src={Logo} alt=""></img>
          <nav className="flex font-semibold text-center text-[17px] gap-5 items-center text-white">
            <h2>ALL USERS</h2>
            <NavLink>CHAT</NavLink>
            <h2>CONTACT</h2>
            <h2>SETTING</h2>
            <h2>FAQS</h2>
            <h2>TERMS OF USE</h2>
            <div className="bg-[#161A26] h-[50px] flex items-center  rounded-lg ml-10 w-[250px] p-2">
              <img className="h-8 w-8 " src={username} alt="username" />
              <h2 className="font-semibold text-[20px] text-white overflow-hidden text-center p-1 w-[150px] ml-1 leading-5 ">
              {Current_Account_Username}
              <br />
              {Current_Account.substring(0,5)}
              ...
              {Current_Account.substring(38,42)}
                
              </h2>
            </div>
          </nav>
        </div>

        <div className="h-[85vh]  p-5 mt-2">
          <nav className="flex justify-between items-center  ">
            <div className="Search h-[45px] bg-[#161A26] w-[400px] p-5 rounded-[50px] flex items-center">
              <img className="h-5 w-5" src={search} alt="search" />
              <input
                className=" ml-5 bg-transparent outline-none text-white text-[20px] w-[250px]"
                type="text"
                placeholder="Search"
                name=""
                id=""
              />
            </div>
            <button className="bg-[#161A26] h-[45px] flex items-center p-5 rounded-[50px] w-[200px]" onClick={()=>{navigate("Add-Friend")}}>
              <img src={user} className="h-7 w-7" alt="" />
              <div className="text-[#e7730d] ml-5 "> Add fiend</div>
            </button>
          </nav>

          
          <div className="flex gap-10 mt-2  h-[75vh]">
            <Chats />
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
