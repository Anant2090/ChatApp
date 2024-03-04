import React from "react";
import "./Loginn.css";
import { useContext } from "react";
import { TransactionContext } from "../../Context/TransactionContext";
import { gsap } from 'gsap';


const Login = () => {
  const {
    CurrUserAcc,
    SetCurrUserAcc,
    connect,
    CheckConnection,
    WriteOnContract,
    ConvertTime,
    fetchContract,
    CheckUserExists,
    CurrAcc,
    CurrUserExist,
  } = useContext(TransactionContext);

  async function login() {
    try {
      await connect();
      const a=await CheckUserExists();
      if (a == true) {
        SetCurrUserAcc(CurrAcc);
        const contract = await WriteOnContract();
        const user = await contract.Get_User();
        console.log(user);
        gsap.to(".main-1", {
          y: -700,
          duration: 2,
          opacity:0,
          ease: 'power2.inOut' // Fix the typo here
        })
      } else {
        console.log("not exist");
      }
    } catch(error) {
      alert(error);
    }
  }

  async function Register() {
    try {
      const username = document.querySelector(".inp").value;
      const contract = await WriteOnContract();
      var isAvail=false;
      if(username!="")
      {
         isAvail = await contract.Is_UsernameAvail(username);
      }
      else
      {
        alert("Username Cannot be Empty");
        return;
      }
      if (isAvail == false) {
        await contract.register(username);
        await login();
        alert("done");
      } else {
        alert("Choose Another Username");
      }
    } catch (error) {
      alert("You are alredy registerd");
    }
  }

  return (
    <div className="main-1">
      <div className="box">
        <div className="register">
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Enter Your Username Here"
            className="inp"
          ></input>
          <button onClick={Register}>Register</button>
          <div className="line"></div>
        </div>
        <div className="line">
          <hr className="main-line" />
          <h3 style={{ margin: "0 10px" }}>or</h3>
          <hr className="main-line" />
        </div>

        <div className="log">
          <h1>Login</h1>
          <button onClick={login}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;







// import React, { useContext } from "react";
// import "./Login.css";
// import { TransactionContext } from "../../Context/TransactionContext";
// import { gsap } from 'gsap';

// const Login = () => {
//   const {
//     connect,
//     WriteOnContract,
//     CheckUserExists,
//   } = useContext(TransactionContext);

//   async function login() {
//     try {
//       await connect();
//       const userExists = await CheckUserExists();

//       if (userExists) {
//         const contract = await WriteOnContract();
//         const user = await contract.Get_User();
//         console.log(user);
//         gsap.to(".main", {
//           y: -600,
//           duration: 2,
//           ease: 'power2.inOut'
//         });
//       } else {
//         console.log("User does not exist");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   }

//   async function Register() {
//     try {
//       const username = document.querySelector(".inp").value;
//       const contract = await WriteOnContract();
//       let isAvailable = false;

//       if (username !== "") {
//         isAvailable = await contract.Is_UsernameAvail(username);
//       } else {
//         alert("Username Cannot be Empty");
//         return;
//       }

//       if (!isAvailable) {
//         await contract.register(username);
//         await login();
//         alert("Registration done");
//       } else {
//         alert("Choose Another Username");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   }

//   return (
//     <div className="main">
//       <div className="box">
//         <div className="register">
//           <h1>Register</h1>
//           <input
//             type="text"
//             placeholder="Enter Your Username Here"
//             className="inp"
//           />
//           <button onClick={Register}>Register</button>
//           <div className="line"></div>
//         </div>
//         <div className="line">
//           <hr className="main-line" />
//           <h3 style={{ margin: "0 10px" }}>or</h3>
//           <hr className="main-line" />
//         </div>
//         <div className="login">
//           <h1>Login</h1>
//           <button onClick={login}>Sign In</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
