import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("WavePortal");
  const portal = await Token.deploy({
    value: ethers.utils.parseEther("0.1"),
  });

  await portal.deployed();
  console.log("WavePortal address: ", portal.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
