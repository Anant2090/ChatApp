// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Chatting {

    struct User
    {
        string name;
        address User_address;
    }
    
    mapping(address=>User)AllUsers;
    mapping(address=>bool)registerd;
    mapping(string=>bool)AllUsernames;

    function register(string memory username) public 
    {
        require(registerd[msg.sender]==false,"You are alredy registered");
        AllUsers[msg.sender]=User({name:username,User_address:msg.sender});
        registerd[msg.sender]=true;
    }
    function is_Registered() public view returns(bool)
    {
       return registerd[msg.sender];

    }

    function Is_UsernameAvail(string memory Username) public view returns(bool)
    {
        return AllUsernames[Username];
    }    

    function Register_Username(string memory Username) public 
    {
        require(AllUsernames[Username]==false,"Username not available");
        AllUsernames[Username]=true;
    }

    function Get_User() public view returns(User memory)  
      {
        require(registerd[msg.sender]==true,"User is not regitered");
        return AllUsers[msg.sender];
    }
}
