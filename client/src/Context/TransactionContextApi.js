import React, { useState } from "react";
import { Contract_Address, Contract_ABI } from "../Utils/context";
import { useEffect } from "react";
import { ethers } from "ethers";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export const TransactionContext = React.createContext();


const TransactionCintext = ({ children }) => {
  const [Current_Account, Set_Current_Account] = useState("");
  const [Current_Account_Username, Set_Current_Account_Username] = useState("");
  const [Sender_Chat,Set_Sender_Chat]=useState([]);
  const [Receiver_Chat,Set_Receiver_Chat]=useState([]);

  const [Curr_Chat, Set_Curr_Chat] = useState({ name: "", Addrss: "" });
  const [navi, setnavi] = useState(false);


  const [Loader,setLoader]=useState(false);
  //  async function a()
  //  {
  //   console.log(b[0]);
  //  }

  useEffect(()=>{
    // send_msg("0x53b45C1Dd01dC5cdB04CFd1b2c29688818A23FD6","hello");
    // Map_Messages();
    // a();
    

      
  
  },[])

  async function Map_Messages(from,to)
  {
    const a=await Get_All_Msg(from,to);
    const b=await Get_All_Msg(to,from);
    
    Set_Sender_Chat(a);
    Set_Receiver_Chat(b);
    // var len1=0;
    // var len2=0;

    // console.log(len1,len2);
    // while(len1<a.length && len2<b.length)
    // {
    //   if(a[len1].timestamp<b[len2].timestamp)
    //   {
    //     console.log(a[len1].sender);
    //     console.log(a[len1].msg);
    //     len1++;
    //   }
    //   else
    //   {
    //     console.log(b[len2].sender);
    //     console.log(b[len2].msg);
    //     len2++;
    //   }
    // }
    // while(len1<a.length)
    // {
    //   console.log(a[len1].sender);
    //   console.log(a[len1].msg);
    //   len1++;
      
    // }
    // while(len2<b.length)
    // {
    //   console.log(b[len2].sender);
    //   console.log(b[len2].msg);
    //   len2++;
      
    // }


  }
  

  async function send_msg(to,str) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract_write = new ethers.Contract(
        Contract_Address,
        Contract_ABI,
        signer
      );
      setLoader(true);
      const b = await contract_write.sendMessage(to,str);
      setTimeout(() => {
        setLoader(false);
        
      }, 25000);
    } catch (error) {
      setLoader(false);
      alert(error);
    }
  }

  async function Get_All_Msg(from,to) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract_write = new ethers.Contract(
        Contract_Address,
        Contract_ABI,
        signer
      );
      const b = await contract_write.Get_All_Messages(from,to);
      // console.log(b);
      return b;
    } catch (error) {
      alert(error);
    }
  }
  async function getmyfriend() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract_write = new ethers.Contract(
      Contract_Address,
      Contract_ABI,
      signer
    );
    const a = await contract_write.getMyFriendList();
    // console.log("friends",a);
    return a;
  }
  async function checkfriends() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract_write = new ethers.Contract(
      Contract_Address,
      Contract_ABI,
      signer
    );
    const a = await contract_write.checkAlreadyFriends(
      "0xf08dd6Be8697Be67e45Ef79bD0E18934e09018e0"
    );
    console.log(a);
  }
  async function getfriends() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract_write = new ethers.Contract(
      Contract_Address,
      Contract_ABI,
      signer
    );

    const a = await contract_write.getMyFriendList();
    console.log(a);
  }
  async function register(name) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract_write = new ethers.Contract(
        Contract_Address,
        Contract_ABI,
        signer
      );
      await Promise.all([contract_write.createAccount(name)]);
    } catch (error) {
      console.log(error);
    }
  }

  async function get_acc_Address_Name() {
    const a = await window.ethereum.request({ method: "eth_accounts" });
    Set_Current_Account(a[0]);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract_write = new ethers.Contract(
        Contract_Address,
        Contract_ABI,
        signer
      );
      const b = await contract_write.getUsername(a[0]);
      Set_Current_Account_Username(b);
    } catch (error) {
      console.log(error);
    }
  }

  async function login(val) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract_write = new ethers.Contract(
        Contract_Address,
        Contract_ABI,
        signer
      );
      const a = await contract_write.CheckUser();

      if (a === true) {
        Connect();
        get_acc_Address_Name();
        setnavi(true);
        Set_Sender_Chat([]);
        Set_Receiver_Chat([]);
      } else {
        setnavi(false);
        alert("You have to Register First");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllMsg(to) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract_write = new ethers.Contract(
        Contract_Address,
        Contract_ABI,
        signer
      );
      const a = await contract_write.Get_All_Messages(to);

      console.log(a);
    } catch (error) {
      console.log(error);
    }
  }

  async function Connect() {
    if (!window.ethereum) {
      alert("Metamask is not installed on your brouser");
      return;
    } else {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      Set_Current_Account(accounts[0]);
    }
  }

  async function Add_Friend(Add, Name) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract_write = new ethers.Contract(
      Contract_Address,
      Contract_ABI,
      signer
    );

    try {
      const a = await contract_write.CheckUser();
      if (a === true) {
        setLoader(true);
        await contract_write.addFriend(Add, Name);
        setTimeout(() => {
          setLoader(false);
          
        }, 20000);
      } else {
        setLoader(false);
        alert("You have to Register First");
      }
    } catch (error) {
      const errorMessage = error.message;
      alert(errorMessage.substring(20, 56));
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        Connect,
        Current_Account,
        navi,
        Set_Current_Account,
        register,
        login,
        Add_Friend,
        getmyfriend,
        get_acc_Address_Name,
        Current_Account_Username,
        Curr_Chat,
        Set_Curr_Chat,
        getAllMsg,
        Map_Messages,
        Receiver_Chat,
        Sender_Chat,
        setLoader,
        Loader,
        send_msg
        
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionCintext;
