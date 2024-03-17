import React, { useContext, useEffect, useState } from "react";
import accountName from "../assets/acountName.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import smile from "../assets/smile.png";
import file from "../assets/file.png";
import send from "../assets/send.png";
import { TransactionContext } from "../Context/TransactionContextApi";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import loader from "../assets/loader.gif"

const Chat = () => {
  const {
    Curr_Chat,
    Set_Curr_Chat,
    Current_Account,
    Map_Messages,
    Receiver_Chat,
    Sender_Chat,
    Loader,
    send_msg,
  } = useContext(TransactionContext);
  // console.log(Curr_Chat);
  const [updator ,setupdator]=useState(false);
  const [inp,setinp]=useState();


  function Load_Chat() {
    const a = document.querySelector(".messages-point");
    var len1 = 0;
    var len2 = 0;
    while (len1 < Sender_Chat.length && len2 < Receiver_Chat.length) {
      if (Sender_Chat[len1].timestamp < Receiver_Chat[len2].timestamp) {
        const div = document.createElement("div");
        div.className =
          "left w-[100px] text-center max-w-500px mt-5 bg-white rounded-xl";
        div.textContent = Sender_Chat[len1].msg;
        a.appendChild(div);
        // console.log(Sender_Chat[len1].sender);
        // console.log(Sender_Chat[len1].msg);
        len1++;
      } else {
        const div = document.createElement("div");
        div.className =
          "right flex self-end items-center justify-center mt-5 w-[100px] max-w-[500px] bg-white rounded-xl";
        div.textContent = Receiver_Chat[len2].msg;
        a.appendChild(div);
        // console.log(Receiver_Chat[len2].sender);
        // console.log(Receiver_Chat[len2].msg);
        len2++;
      }
    }
    while (len1 < Sender_Chat.length) {
      const div = document.createElement("div");
      div.className =
        "left w-[100px] text-center max-w-500px mt-5 bg-white rounded-xl";
      div.textContent = Sender_Chat[len1].msg;
      a.appendChild(div);
      // console.log(Sender_Chat[len1].sender);
      // console.log(Sender_Chat[len1].msg);
      len1++;
    }
    while (len2 < Receiver_Chat.length) {
      const div = document.createElement("div");
      div.className =
        "right flex self-end mt-5 items-center justify-center  w-[100px] max-w-[500px] bg-white rounded-xl";
      div.textContent = Receiver_Chat[len2].msg;
      a.appendChild(div);
      // console.log(Receiver_Chat[len2].sender);
      // console.log(Receiver_Chat[len2].msg);
      len2++;
    }
  }

  function Delete_Chat() {
    const a = document.querySelector(".messages-point");
    while (a.firstChild) {
      a.removeChild(a.firstChild);
    }
  }

  useEffect(() => {
   Delete_Chat();
    Load_Chat();

  }, [Loader,Receiver_Chat,Sender_Chat,updator]);

  return (
    <div className="h-[75vh] flex flex-col justify-between w-[100%] p-1 rounded-sm bg-[#161A26] ">
      <div className="h-[9vh] text-white bg-[#1E2630] rounded-lg flex items-center justify-between">
        <div className="profile flex items-center gap-5 text-[20px] leading-5  font-semibold rounded-sm h-[9vh]">
          <img
            className="h-[67px] ml-[20px] w-[70px]"
            src={accountName}
            alt=""
          />
          <div>
            {Curr_Chat.name}
            <br />
            {Curr_Chat.Address}
          </div>
        </div>
        <div className="flex gap-5">
          <FaPhoneAlt className="h-6 w-10  hover:cursor-pointer" />
          <FaVideo className="h-6 w-10  hover:cursor-pointer" />
          <IoIosSearch className="h-6 w-10  mr-[100px] hover:cursor-pointer" />
        </div>
      </div>
      <div className="messages-point p-2 flex flex-col h-[59vh] #1E2630 overflow-y-auto">
        {/* <div class="left w-fit max-w-[500px] mt-5 bg-white rounded-xl">a</div>
        <div class="left flex self-end mt-5 w-fit max-w-[500px] bg-white rounded-xl">
          Lorem ipsumd doloremque repudiandae ea ullam minima. Obcaecati, dolore
          eos.
        </div> */}
      </div>
      <div className="send-message  bg-[#1E2630] rounded-sm h-[7vh] flex items-center justify-around">
        <img
          className="hover:cursor-pointer h-[45px] w-[45px]"
          src={smile}
          alt="smile"
        />
        <input
          onChange={() => {
            var val = document.querySelector(".inpp").value;
            setinp(val);
        }}
          className="inpp w-[700px] p-3 bg-transparent text-white"
          type="text"
          placeholder="Type Your Message here"
          name=""
          id=""
        />
        <img
          className="hover:cursor-pointer h-[45px] w-[45px]"
          src={file}
          alt="file"
        />
        {
          Loader ?(<img className="h-[50px] w-[50px]" src={loader}></img>):(<img
            onClick={()=>
            {
              try
              {
                send_msg(Curr_Chat.Address,inp);
                setTimeout(()=>{
                  Map_Messages(Current_Account,Curr_Chat.Address)
                },5000)
              }
              catch(error)
              {
                alert(error);
              }
  
            }}
            className="hover:cursor-pointer h-[45px] w-[45px]"
            src={send}
            alt="send"
          />)
        }
      </div>
    </div>
  );
};

export default Chat;
