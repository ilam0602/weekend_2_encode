import {ethers} from "hardhat"
import { MyERC20Votes,MyERC20Votes__factory,TokenizedBallot,TokenizedBallot__factory } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Signer } from "ethers";

const MINT_AMOUNT = ethers.utils.parseUnits("10");

const proposals = ["chocolate","strawberry","vanilla"];

async function initToken(deployer:SignerWithAddress,acc1:SignerWithAddress,acc2:SignerWithAddress): Promise<[MyERC20Votes,TokenizedBallot]>{

    const tokenContractFactory = new MyERC20Votes__factory(deployer);
    const tokenContract = await tokenContractFactory.deploy();
    const tokenReceipt = await tokenContract.deployTransaction.wait();

    console.log(`token contract deployed at: ${tokenReceipt.transactionHash}`)

    const mintTx = await tokenContract.mint(acc1.address,MINT_AMOUNT);
    const mintTxReceipt = await mintTx.wait();
    console.log(`Minted ${ethers.utils.formatUnits(MINT_AMOUNT)} tokens to the address
    ${acc1.address} at block ${mintTxReceipt.blockNumber}
            transaction hash: ${mintTxReceipt.transactionHash}` )

    const mintTx2 = await tokenContract.mint(acc2.address,MINT_AMOUNT);
    const mintTx2Receipt = await mintTx2.wait();
    console.log(`Minted ${ethers.utils.formatUnits(MINT_AMOUNT)} tokens to the address
    ${acc2.address} at block ${mintTx2Receipt.blockNumber}
            transaction hash: ${mintTx2Receipt.transactionHash}` )

    const balanceBN = await tokenContract.balanceOf(acc1.address);
    console.log(
        `Account ${acc1.address} has ${ethers.utils.formatUnits(balanceBN)} of MyToken`
    )
    const balanceBN2 = await tokenContract.balanceOf(acc2.address);
    console.log(
        `Account ${acc2.address} has ${ethers.utils.formatUnits(balanceBN2)} of MyToken`
    )


    const delegateTx = await tokenContract.connect(acc1).delegate(acc1.address);
    const delegateTxRec = await delegateTx.wait();
    console.log(
        `Account ${acc1.address} self delegated
            transaction hash: ${delegateTxRec.transactionHash}`
    )

    const votesAfter = await tokenContract.getVotes(acc1.address);


    console.log(
        `Account ${acc1.address} has ${ethers.utils.formatUnits(
            votesAfter)} of voting power after self delegate`
    )

    const delegateTx2 = await tokenContract.connect(acc2).delegate(acc2.address);
    const initRec  = await delegateTx2.wait();
    console.log(
        `Account ${acc2.address} self delegated
            transaction hash: ${initRec.transactionHash}`
    )

    const votesAfter2 = await tokenContract.getVotes(acc2.address);


    console.log(
        `Account ${acc2.address} has ${ethers.utils.formatUnits(
            votesAfter2)} of voting power after self delegate`
    )

    const ballotContractFactory = new TokenizedBallot__factory(deployer);
    const ballotContract = await ballotContractFactory.deploy(
        proposals.map(ethers.utils.formatBytes32String)
        ,tokenContract.address,initRec.blockNumber
        );
    const ballotReceipt = await ballotContract.deployTransaction.wait();

    console.log(
        `The ballot contract was deployed at address ${
            ballotContract.address} at the block ${ballotReceipt.blockNumber}
            transaction hash: ${ballotReceipt.transactionHash}`
    );
    return [tokenContract,ballotContract];
}

async function voteScript(ballotContract:TokenizedBallot,acc:SignerWithAddress, prop:number,amount: number){
    const votesBefore = await ballotContract.votingPower(acc.address);
    console.log(
        `Account ${acc.address} has ${ethers.utils.formatUnits(
            votesBefore)} of voting power before voting`
    )
    const voteTx = await ballotContract.connect(acc).vote(prop,ethers.utils.parseUnits(amount.toString()));
    const voteTxReceipt = await voteTx.wait();


    const votesAfter = await ballotContract.votingPower(acc.address);


    console.log(
        `Account ${acc.address} has ${ethers.utils.formatUnits(
            votesAfter)} of voting power after voting 
            transaction hash: ${voteTxReceipt.transactionHash}`
    )

}

async function getResults(ballotContract:TokenizedBallot){
    const winner = await ballotContract.winnerName();
    console.log(`winner: ${ethers.utils.toUtf8String(winner)}`);
    return winner
}


async function script1(){
    const [deployer,acc1,acc2] = await ethers.getSigners();
    const retVal = await initToken(deployer,acc1,acc2);
    const tokenContract = retVal[0];
    const ballotContract = retVal[1];


    await voteScript(ballotContract,acc1,1,6);
    await voteScript(ballotContract,acc2,0,5);
    await getResults(ballotContract);

}
async function script2(){
    const [deployer,acc1,acc2] = await ethers.getSigners();
    const retVal = await initToken(deployer,acc1,acc2);
    const tokenContract = retVal[0];
    const ballotContract = retVal[1];


    await voteScript(ballotContract,acc2,0,5);
    await voteScript(ballotContract,acc2,1,5);
    await voteScript(ballotContract,acc2,2,5);
    await getResults(ballotContract);

}

async function main(){
    // script1();
    script2();
    
}

main().catch((err)=>{
    console.error(err);
    process.exitCode = 1;
})