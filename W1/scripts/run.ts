import { ethers } from "hardhat";

const main = async () => {
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();

  console.log("Contract addy:", waveContract.address);

  let contractBalance = await ethers.provider.getBalance(waveContract.address);

  console.log("Contract balance:", ethers.utils.formatEther(contractBalance));

  const waveTxn1 = await waveContract.wave("#1 Message");
  await waveTxn1.wait();

  const waveTxn2 = await waveContract.wave("#2 Message");
  await waveTxn2.wait();

  contractBalance = await ethers.provider.getBalance(waveContract.address);
  console.log("Contract balance:", ethers.utils.formatEther(contractBalance));

  const allWaves = await waveContract.getWaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exitCode = 0;
  } catch (e) {
    console.log(e);
    process.exitCode = 1;
  }
};

runMain();
