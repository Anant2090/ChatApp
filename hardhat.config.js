require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/8ukntUu1ZZcIP5weYKzLfwqIKMPn3Un6",
      accounts:["d55278e38c772fbb277ec2e1013c1178c80f9233dc6d901cac418256070fe507"]
    }
  }
};
