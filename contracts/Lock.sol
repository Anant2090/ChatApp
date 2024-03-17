<<<<<<< HEAD
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract ChatApp
{
    struct user
    {
        string name;
        friend[] friendList;
    }
    struct friend
    {
        address pubkey;
        string name;
    }

    struct AllUserStruct
    {
        string name;
        address accountAddress;
    }

    AllUserStruct[] getAllUsers;

    struct message
    {
        address sender;
        uint timestamp;
        string msg;
    }

    mapping (address=>user) userList;
    mapping (bytes32=>message[]) allMessages;
    mapping(address=>mapping(address=>message[])) MessageS;
    //Get All Messags of user

    function Get_All_Messages(address from,address _to) public view returns(message[] memory)
    {
        return MessageS[from][_to];
    }

    //CHECK USER EXIST

    function checkUserExists(address pubkey) public view returns (bool)
    {
        if(bytes(userList[pubkey].name).length>0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function CheckUser() public view returns (bool)
    {
        if(bytes(userList[msg.sender].name).length>0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    //CREATE ACCOUNT

    function createAccount(string calldata name)public 
    {
        require(checkUserExists(msg.sender)==false,"You Already Have an Account");
        require(bytes(name).length>0,"User name Cannot be Empty");

        userList[msg.sender].name=name;
        getAllUsers.push(AllUserStruct(name,msg.sender));
    } 

    //GET USERNAME

    function getUsername(address pubkey) external view returns(string memory)
    {
        require(pubkey==msg.sender);
        require(checkUserExists(pubkey),"User not Registered");
        return userList[pubkey].name;
    }

    //ADD FRIEND

    function addFriend(address friend_key,string calldata name) external{
        require(checkUserExists(friend_key)==true,"Your Friend Have not Registerd On Our Platform yet");
        require(checkUserExists(msg.sender)==true,"you are not user");
        require(msg.sender!=friend_key,"You cannot add yourseld as friend");
        _addFriend(msg.sender,friend_key,name);
        _addFriend(friend_key,msg.sender,userList[msg.sender].name);
    }

    //Check Already Friends

    function checkAlreadyFriends(address pubkey2) public view returns (bool) {
        friend[] memory users = getMyFriendList();
        for (uint i = 0; i < users.length; i++) {
            if (users[i].pubkey == pubkey2) {
                return true; // pubkey2 is already in the friend list of pubkey1
            }
        }
        return false; // pubkey2 is not in the friend list of pubkey1
    }

    function _addFriend(address me,address friend_key,string memory name) internal
    {
        require(checkAlreadyFriends(friend_key)==false,"You are already friends");
        friend memory newFriend=friend(friend_key,name);
        userList[me].friendList.push(newFriend);
    }

    //GET MY FRIEND

    function getMyFriendList() public  view returns (friend[] memory) 
    {
        return userList[msg.sender].friendList;
    }

    //SEND MESSAGE

    function sendMessage(address friend_key,string memory _msg )external
    {
        require(checkUserExists(msg.sender),"Create account first");
        require(checkUserExists(friend_key),"your Frind in not registered");
        require(checkAlreadyFriends( friend_key),"You are not friends");
        message memory newMsg=message(msg.sender,block.timestamp,_msg);
        MessageS[msg.sender][friend_key].push(newMsg);
        
    }

    //Get All Users

    function getAllAppUser() public view returns(AllUserStruct[] memory)
    {
        return getAllUsers;
    }
}
=======
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
>>>>>>> d5cace5529400098ae66e30bd99e970f051e99b0
