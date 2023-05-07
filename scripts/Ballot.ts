// import { ethers } from "ethers";
import { ethers } from "hardhat";
import { Ballot__factory,Ballot } from "../typechain-types";
import * as dotenv from 'dotenv';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

dotenv.config();

// const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];
const ADDRESS = "0x3836bF8F3762820F95CBab66Fa462550E0F8d99c";


async function giveRightToVote(signer:SignerWithAddress, walletAddress: string, contract: Ballot){
  const connectedContract = contract.connect(signer);
  console.log(`Giving right to vote to address ${walletAddress}`);
  const giveRightToVote = await connectedContract?.giveRightToVote(walletAddress);
  const giveRightToVoteTx = await giveRightToVote.wait();
  console.log(
    `The transaction hash is ${giveRightToVoteTx.transactionHash} included at block ${giveRightToVoteTx.blockNumber}`
  );

}
async function castVote(signer:SignerWithAddress, contract: Ballot, proposal:number){
  console.log(`Casting vote for proposal number: ${proposal}`)
  const connectedContract = contract.connect(signer);
  const castVote = await connectedContract?.vote(proposal);
  const castVoteTx = await castVote.wait();
  console.log(
    `The transaction hash is ${castVoteTx.transactionHash} included at block ${castVoteTx.blockNumber}`
  );
}

async function delegateVote(signer:SignerWithAddress,walletAddress: string, contract: Ballot){
  console.log(`Delegating Vote to addresss: ${walletAddress}`)
  const connectedContract = contract.connect(signer);
  const delegateVote = await contract?.delegate(walletAddress);
  const delegateVoteTx = await delegateVote.wait();
  console.log(
    `The transaction hash is ${delegateVoteTx.transactionHash} included at block ${delegateVoteTx.blockNumber}`
  );
  
}
async function queryResult(contract:Ballot){
  const winnerName = await contract.winnerName()
  const formattedName = ethers.utils.parseBytes32String(winnerName)
  console.log(`Winner: ${formattedName}`)
}


async function test1(){
  const etherSigners = await ethers.getSigners();
  const signer = etherSigners[0];
  const signer2 =etherSigners[1];

//  have to connect to correct provider in class it was
//  alchemy
//

//TODO
  // const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "");
  // console.log(`Address: ${wallet.address}`);
  // const provider = new ethers.providers.AlchemyProvider("sepolia",process.env.ALCHEMY_API_KEY)

  // const lastBlock = await provider.getBlock("latest");
  // console.log(`Last block: ${lastBlock.number}`);

  // const signer = wallet.connect(provider);

  const balance = await signer.getBalance();
  console.log(`The balance of the ${signer.address} is ${balance} WEI`);

  const proposals = process.argv.slice(2);
  console.log(proposals);
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });
  // TODO
  const ballotFactory = await ethers.getContractFactory("Ballot");
  // const ballotFactory = new Ballot__factory(signer);
  const ballotContract = await ballotFactory.deploy(
    proposals.map(ethers.utils.formatBytes32String)
  );
  const deployTx = await ballotContract.deployTransaction.wait();
  console.log(
    `The ballot contract was deployed at ${ballotContract.address} at block ${deployTx.blockNumber}`
  );
  const chairperson = await ballotContract.chairperson();
  console.log(
    `The chairperson of this contract is ${chairperson}`
  );


  let signer2address = await signer2.getAddress();
  
  await giveRightToVote(signer,signer2address,ballotContract);

  await delegateVote(signer,signer2address,ballotContract);
  await castVote(signer2,ballotContract,1);

  await queryResult(ballotContract);

}
async function test2(){
  const etherSigners = await ethers.getSigners();
  const signer = etherSigners[0];
  const signer2 =etherSigners[1];

//  have to connect to correct provider in class it was
//  alchemy
//

//TODO
  // const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "");
  // console.log(`Address: ${wallet.address}`);
  // const provider = new ethers.providers.AlchemyProvider("sepolia",process.env.ALCHEMY_API_KEY)

  // const lastBlock = await provider.getBlock("latest");
  // console.log(`Last block: ${lastBlock.number}`);

  // const signer = wallet.connect(provider);

  const balance = await signer.getBalance();
  console.log(`The balance of the ${signer.address} is ${balance} WEI`);

  const proposals = process.argv.slice(2);
  console.log(proposals);
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });
  // TODO
  const ballotFactory = await ethers.getContractFactory("Ballot");
  // const ballotFactory = new Ballot__factory(signer);
  const ballotContract = await ballotFactory.deploy(
    proposals.map(ethers.utils.formatBytes32String)
  );
  const deployTx = await ballotContract.deployTransaction.wait();
  console.log(
    `The ballot contract was deployed at ${ballotContract.address} at block ${deployTx.blockNumber}`
  );
  const chairperson = await ballotContract.chairperson();
  console.log(
    `The chairperson of this contract is ${chairperson}`
  );


  let signer2address = await signer2.getAddress();
  
  await giveRightToVote(signer,signer2address,ballotContract);
  await castVote(signer,ballotContract,1);

  await delegateVote(signer,signer2address,ballotContract);

}

async function main() {
  // ethers.getSigners() only works with hardhat
  // test1();
  test2();
 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});