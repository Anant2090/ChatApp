import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContextApi";
import loader from "../assets/loader.gif";

const AddFriend = () => {
  const { Add_Friend, setLoader, Loader } = useContext(TransactionContext);
  const [updator, setupdator] = useState();

  const navigate = useNavigate();
  return (
    <div className="bg-black w-full h-full text-white fixed top-0 left-0 z-50 opacity-8 flex  items-center justify-center">
      <div className="h-[30vh] w-[35vw] rounded-xl bg-[#1E2630]">
        <div className="text-black flex justify-end">
          <IoCloseCircleOutline
            className="h-8 w-8 hover:cursor-pointer "
            onClick={() => {
<<<<<<< HEAD
              navigate("/user/");
=======
              navigate("/user");
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
            }}
          />
        </div>
        <div className="flex flex-col mt-2 gap-8 items-center">
          <input
            type="text"
            placeholder="Enter Your Friends Username"
            className="Username w-[30vw] p-3 text-[20px]   rounded-[5px] bg-[#161A26] border-[#94959B]"
          />
          <input
            type="text"
            placeholder="Enter Your Friends Address here"
            className="Address w-[30vw] p-3 text-[20px]   rounded-[5px] bg-[#161A26] border-[#94959B]"
          />
          {Loader ? (
            <img className="h-[50px] w-[50px]" src={loader}></img>
          ) : (
            <button
              onClick={async () => {
                var user = document.querySelector(".Username").value;
                var Add = document.querySelector(".Address").value;
                if (user === "" || Add === "") {
                  alert("You Need to fill All the Fields");
                } else {
                  var a = false;
                  try {
                    await Add_Friend(Add, user);
                    a = true;
                    let Id = setInterval(() => {
                      setupdator(1);
                      console.log(1);
                    }, 3000);

                    setTimeout(() => {
                      clearInterval(Id);
                      navigate("/user");
                    }, 20000);
                  } catch (error) {
                    alert(error);
                  }
                }
              }}
              className="bg-[#A2A3A8] h-[50px] w-[250px] text-black rounded-[15px]  font-semibold text-[20px] "
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddFriend;
