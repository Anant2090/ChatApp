import React, { useState,useEffect } from "react";
import FriendChat from "./FriendChat";
import { TransactionContext } from "../Context/TransactionContextApi";
import { useContext } from "react";

const Chats = () => {
  const {getmyfriend}=useContext(TransactionContext);
  const [Allfriends,setAllFriends]=useState([]);

  async function p() {
    const a=await getmyfriend();
    setAllFriends(a);

  }

  useEffect(()=>{
    p();
    
  },[])
  
  return (
    <div className="h-[75vh] w-[37vw] rounded-sm bg-[#161A26] p-5 overflow-y-auto">
      {Allfriends.map((val,index)=>(<FriendChat  key={index} name={val.name} Add={val.pubkey} />))}
    </div>
  );
};

export default Chats;
