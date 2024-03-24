// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
  const lock = await hre.ethers.deployContract("ChatApp");

  await lock.waitForDeployment();

  console.log("Contract Address :",lock.target);
<<<<<<< HEAD
=======
=======

  const lock = await hre.ethers.deployContract("Chatting");

  await lock.waitForDeployment();

  console.log("Contract Address :", lock.target);
>>>>>>> d5cace5529400098ae66e30bd99e970f051e99b0
>>>>>>> 92423fa94f7a39ecc0192ca185a2c9a0ba84ca30
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
