import React from "react";
import accountName from "../assets/acountName.png";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContextApi";
const FriendChat = (props) => {
  const { Curr_Chat, Set_Curr_Chat,getAllMsg,Current_Account,Map_Messages} = useContext(TransactionContext);

  return (
    <div
      onClick={() => {
        
        Set_Curr_Chat((prev) => ({
          ...prev,
          name: props.name,
          Address: props.Add,
        }));

        Map_Messages(Current_Account,props.Add);
      }}
      className="bg-[#1E2630] p-2 h-[60px] mb-2  gap-5 rounded-md text-gray-400 flex items-center cursor-pointer hover:bg-[#1E2650] "
    >
      <img className="h-[50px] w-[50px]" src={accountName} alt="" />
      <div className="leading-5 text-[17px] truncate font-noraml">
        <div>{props.name}</div>
        <div>{props.Add}</div>
      </div>
    </div>
  );
};

export default FriendChat;
