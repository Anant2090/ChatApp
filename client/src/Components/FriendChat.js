import React from "react";
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
        
        
        Set_Curr_Chat((prev) => ({
          ...prev,
          name: props.name,
          Address: props.Add,
        }));

        Set_Show_Chat(true);

        Map_Messages(Current_Account,props.Add);
      }}
      className="a bg-[#1E2630] p-2 h-[60px] mb-2  gap-5 rounded-md text-gray-400 flex items-center cursor-pointer hover:bg-[#1E2650] "
    >
      <img className="h-[50px] w-[50px]" src={accountName} alt="" />
      <div className="leading-5 text-[17px] truncate font-noraml">
        <div>{props.name}</div>
        <div>{props.Add}</div>
      </div>
    </NavLink >
  );
};

export default FriendChat;
