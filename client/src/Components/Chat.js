import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import accountName from "../assets/username.png";
=======
import accountName from "../assets/acountName.png";
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import smile from "../assets/smile.png";
import file from "../assets/file.png";
import send from "../assets/send.png";
import { TransactionContext } from "../Context/TransactionContextApi";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
<<<<<<< HEAD
import loader from "../assets/loader.gif";
import { FiSend } from "react-icons/fi";
import { toNumber } from "ethers";

=======
import loader from "../assets/loader.gif"
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30

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
<<<<<<< HEAD
    Show_Chat
  } = useContext(TransactionContext);
    // console.log(Curr_Chat);
  const [inp, setinp] = useState();

  function TimeStamp_To_RealTime(t)
  {
    const obj= new Date(t*1000);
    const hour=obj.getHours();
    const minuits=obj.getMinutes();
    const seconds=obj.getSeconds();

    return `${hour}:${minuits}`
  }
=======
  } = useContext(TransactionContext);
  // console.log(Curr_Chat);
  const [updator ,setupdator]=useState(false);
  const [inp,setinp]=useState();

>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30

  function Load_Chat() {
    const a = document.querySelector(".messages-point");
    var len1 = 0;
    var len2 = 0;
    while (len1 < Sender_Chat.length && len2 < Receiver_Chat.length) {
      if (Sender_Chat[len1].timestamp < Receiver_Chat[len2].timestamp) {
        const div = document.createElement("div");
        div.className =
<<<<<<< HEAD
          "left flex self-start  items-end justify-between    min-w-[150px] max-w-[500px] rounded-r-lg rounded-tl-lg h-[50px] h-auto p-2 mt-5 bg-green-200";
        div.textContent = Sender_Chat[len1].msg;
        const p=document.createElement("p");
        p.className="text-[10px] w-fit ml-2  h-fit  "
        const time=TimeStamp_To_RealTime(toNumber(Sender_Chat[len1].timestamp))
        p.textContent=time;

        a.appendChild(div).append(p);
=======
          "left w-[100px] text-center max-w-500px mt-5 bg-white rounded-xl";
        div.textContent = Sender_Chat[len1].msg;
        a.appendChild(div);
        // console.log(Sender_Chat[len1].sender);
        // console.log(Sender_Chat[len1].msg);
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
        len1++;
      } else {
        const div = document.createElement("div");
        div.className =
<<<<<<< HEAD
        "right flex self-end items-end justify-between   min-w-[150px]  max-w-[500px] rounded-r-lg rounded-tl-lg h-[50px] h-auto p-2 mt-5 bg-blue-300";
        div.textContent = Receiver_Chat[len2].msg;
        const p=document.createElement("p");
        p.className="text-[10px] w-fit ml-2  h-fit  "
        const time=TimeStamp_To_RealTime(toNumber(Receiver_Chat[len2].timestamp))
        p.textContent=time;
        a.appendChild(div).append(p);
        
=======
          "right flex self-end items-center justify-center mt-5 w-[100px] max-w-[500px] bg-white rounded-xl";
        div.textContent = Receiver_Chat[len2].msg;
        a.appendChild(div);
        // console.log(Receiver_Chat[len2].sender);
        // console.log(Receiver_Chat[len2].msg);
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
        len2++;
      }
    }
    while (len1 < Sender_Chat.length) {
      const div = document.createElement("div");
<<<<<<< HEAD
      div.className = "left flex self-start  items-end justify-between     min-w-[150px] max-w-[500px] rounded-r-lg rounded-tl-lg h-[50px] h-auto p-2 mt-5 bg-green-200";
      div.textContent = Sender_Chat[len1].msg;
      const p=document.createElement("p");
      p.className="text-[10px] w-fit ml-2  h-fit  "
        const time=TimeStamp_To_RealTime(toNumber(Sender_Chat[len1].timestamp))
        p.textContent=time;
        a.appendChild(div).append(p);
=======
      div.className =
        "left w-[100px] text-center max-w-500px mt-5 bg-white rounded-xl";
      div.textContent = Sender_Chat[len1].msg;
      a.appendChild(div);
      // console.log(Sender_Chat[len1].sender);
      // console.log(Sender_Chat[len1].msg);
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
      len1++;
    }
    while (len2 < Receiver_Chat.length) {
      const div = document.createElement("div");
      div.className =
<<<<<<< HEAD
        "right flex self-end   items-end justify-between    min-w-[150px] max-w-[500px] rounded-r-lg rounded-tl-lg h-[50px] h-auto p-2 mt-5 bg-blue-300";
      div.textContent = Receiver_Chat[len2].msg;
      const p=document.createElement("p");
      p.className="text-[10px] w-fit ml-2  h-fit  "
        const time=TimeStamp_To_RealTime(toNumber(Receiver_Chat[len2].timestamp))
        p.textContent=time;
        a.appendChild(div).append(p);
=======
        "right flex self-end mt-5 items-center justify-center  w-[100px] max-w-[500px] bg-white rounded-xl";
      div.textContent = Receiver_Chat[len2].msg;
      a.appendChild(div);
      // console.log(Receiver_Chat[len2].sender);
      // console.log(Receiver_Chat[len2].msg);
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
<<<<<<< HEAD
    Delete_Chat();
    Load_Chat();
  }, [Sender_Chat, Receiver_Chat]);

  return (
    <div className={`h-[75vh] flex flex-col justify-between w-[100%] p-1 rounded-sm bg-[#161A26] ${Show_Chat ? "" : "hidden"}`}>
      <div className="h-[9vh] text-white bg-[#1E2630] rounded-lg flex items-center justify-between ">
=======
   Delete_Chat();
    Load_Chat();

  }, [Loader,Receiver_Chat,Sender_Chat,updator]);

  return (
    <div className="h-[75vh] flex flex-col justify-between w-[100%] p-1 rounded-sm bg-[#161A26] ">
      <div className="h-[9vh] text-white bg-[#1E2630] rounded-lg flex items-center justify-between">
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
<<<<<<< HEAD
          }}
=======
        }}
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
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
<<<<<<< HEAD
        {Loader ? (
          <img className="h-[50px] w-[50px]" src={loader}></img>
        ) : (
          <img
            onClick={() => {
              try {
                send_msg(Curr_Chat.Address, inp);
              } catch (error) {
                alert(error);
              }
=======
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
  
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
            }}
            className="hover:cursor-pointer h-[45px] w-[45px]"
            src={send}
            alt="send"
<<<<<<< HEAD
          />
        )}
=======
          />)
        }
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
      </div>
    </div>
  );
};

export default Chat;
