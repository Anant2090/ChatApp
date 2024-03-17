<<<<<<< HEAD
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
=======

require("@nomicfoundation/hardhat-toolbox");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "8ukntUu1ZZcIP5weYKzLfwqIKMPn3Un6";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "438b7d016be9a3355f871bbded9c099133ca3627fecc967c04cc50a46f5029af";

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
>>>>>>> d5cace5529400098ae66e30bd99e970f051e99b0
