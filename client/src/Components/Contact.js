import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/log.com.png";
import username from "../assets/username.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContextApi";
import { IoSettingsOutline } from "react-icons/io5";

const User = () => {
  const {
    Current_Account,
    Current_Account_Username,
    get_acc_Address_Name,
    Set_Show_Chat,
  } = useContext(TransactionContext);


  useEffect(() => {
    Set_Show_Chat(false);
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
              <img
                className="h-[50px] w-[50px] "
                src={username}
                alt="username"
              />
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default User;
