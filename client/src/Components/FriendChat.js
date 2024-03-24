import React from "react";
<<<<<<< HEAD
import accountName from "../assets/username.png";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContextApi";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
const FriendChat = (props) => {
  const { Curr_Chat, Set_Curr_Chat,getAllMsg,Current_Account,Map_Messages,Show_Chat,Set_Show_Chat} = useContext(TransactionContext);
  const navigate=useNavigate();

  return (
    <NavLink
   
      
      onClick={() => {
        
        
=======
import accountName from "../assets/acountName.png";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContextApi";
const FriendChat = (props) => {
  const { Curr_Chat, Set_Curr_Chat,getAllMsg,Current_Account,Map_Messages} = useContext(TransactionContext);

  return (
    <div
      onClick={() => {
        
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
        Set_Curr_Chat((prev) => ({
          ...prev,
          name: props.name,
          Address: props.Add,
        }));

<<<<<<< HEAD
        Set_Show_Chat(true);

        Map_Messages(Current_Account,props.Add);
      }}
      className="a bg-[#1E2630] p-2 h-[60px] mb-2  gap-5 rounded-md text-gray-400 flex items-center cursor-pointer hover:bg-[#1E2650] "
=======
        Map_Messages(Current_Account,props.Add);
      }}
      className="bg-[#1E2630] p-2 h-[60px] mb-2  gap-5 rounded-md text-gray-400 flex items-center cursor-pointer hover:bg-[#1E2650] "
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
    >
      <img className="h-[50px] w-[50px]" src={accountName} alt="" />
      <div className="leading-5 text-[17px] truncate font-noraml">
        <div>{props.name}</div>
        <div>{props.Add}</div>
      </div>
<<<<<<< HEAD
    </NavLink >
=======
    </div>
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
  );
};

export default FriendChat;
