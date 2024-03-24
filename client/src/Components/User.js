import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import Logo from "../assets/log.com.png";
=======
import Logo from "../assets/logo.png";
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
import username from "../assets/username.png";
import Chats from "./Chats";
import Chat from "./Chat";
import search from "../assets/search.png";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
=======
import { Route,Routes } from "react-router-dom";
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
import AddFriend from "./AddFriend";
import user from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContextApi";
<<<<<<< HEAD
import { IoSettingsOutline } from "react-icons/io5";

const User = () => {
  const {
    Connect,
    login,
    Current_Account,
    Current_Account_Username,
    get_acc_Address_Name,
    Set_Show_Chat
  } = useContext(TransactionContext);
  useEffect(() => {
    Set_Show_Chat(false)
    get_acc_Address_Name();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-r from-[#04060E] to-[#271A62] p-5">
      <div>
        <div className="Navbar flex items-center  flex-right gap-[45vw] mr-20  ">
          <img className="h-[60px] w-[60px] ml-10" src={Logo} alt=""></img>
          <nav className="flex font-semibold text-center text-[17px] gap-5 items-center text-white">
          <NavLink
              to="/user"
              style={({ isActive }) => {
                return isActive ? { color: "Yellow",fontSize:"20px",font:"bold" } : {};
              }}
              className="w-[100px] "
            >
              CHAT
            </NavLink>
            <NavLink to="/Contact"
              style={({ isActive }) => {
                return isActive ? { color: "Yellow",fontSize:"20px", font:"bold" } : {};
              }} className="w-[100px] " >CONTACT</NavLink>
            <NavLink to="/About"
              style={({ isActive }) => {
                return isActive ? { color: "Yellow",fontSize:"20px" ,font:"bold" } : {};
              }} className="w-[100px]  ">ABOUT</NavLink>
            <div className="bg-[#161A26] h-[50px] flex items-center   rounded-lg ml-8 w-[240px] p-2">
              <img className="h-[50px] w-[50px] " src={username} alt="username" />
              <h2 className="font-semibold text-[20px] text-white overflow-hidden text-center p-1 w-[150px] ml-1 leading-5 ">
                {Current_Account_Username}
                <br />
                {Current_Account.substring(0, 5)}
                ...
                {Current_Account.substring(38, 42)}
              </h2>
            </div>
            <IoSettingsOutline
              className="h-[50px] w-[50px] "
              onClick={() => {
                navigate("/setting");
              }}
            />
=======

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
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
          </nav>
        </div>

        <div className="h-[85vh]  p-5 mt-2">
<<<<<<< HEAD
          <nav className="flex gap-[800px] items-center  ">
=======
          <nav className="flex justify-between items-center  ">
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
<<<<<<< HEAD
            <button
              className="bg-[#161A26] h-[45px] flex items-center p-5  rounded-[50px] w-[200px]"
              onClick={() => {
                navigate("Add-Friend");
              }}
            >
              <img src={user} className="h-7 w-7" alt="" />
              <div className="text-[#fcfbfa] ml-5 "> Add fiend</div>
            </button>
          </nav>

=======
            <button className="bg-[#161A26] h-[45px] flex items-center p-5 rounded-[50px] w-[200px]" onClick={()=>{navigate("Add-Friend")}}>
              <img src={user} className="h-7 w-7" alt="" />
              <div className="text-[#e7730d] ml-5 "> Add fiend</div>
            </button>
          </nav>

          
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
