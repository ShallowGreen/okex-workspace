import { ethers } from "hardhat";

async function main() {
  const Bank = await ethers.getContractFactory("Bank");
  const bank = await Bank.deploy({
    value: ethers.utils.parseEther("0.1"),
  });

  await bank.deployed();
  console.log("bank address: ", bank.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
