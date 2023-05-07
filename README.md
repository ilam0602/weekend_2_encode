We ran in hardhat environmnet, code is attached at the bottom. Goerli was congested, did not have enough Geth to transact, Sepolia was giving us problems




output1: 
The balance of the 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 is 10000000000000000000000 WEI\
[ 'Chocolate', 'Vanilla', 'Strawberry' ]\
Deploying Ballot contract\
Proposals: \
Proposal N. 1: Chocolate\
Proposal N. 2: Vanilla\
Proposal N. 3: Strawberry\
The ballot contract was deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 at block 1\
The chairperson of this contract is 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\
Giving right to vote to address 0x70997970C51812dc3A010C7d01b50e0d17dc79C8\
The transaction hash is 0x940de70c27c06d42098a918c102fb1116d6a9d518313b8b81914cec8dba06a4c included at block 2\
Delegating Vote to addresss: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8\
The transaction hash is 0x0462b602c508b50df92cab6e667aff3519aa431e01e0a708a1593ba39ce445b4 included at block 3\
Casting vote for proposal number: 1\
The transaction hash is 0x309ff1a5f482614dc0407f9a0f6374f8522eec0e909abfc4d5541296d7f59047 included at block 4\
Winner: Vanilla




Transactions:

Give Right to Vote to Wallet 2: 0x940de70c27c06d42098a918c102fb1116d6a9d518313b8b81914cec8dba06a4c successful\
Delegate Vote from 1 to 2: 0x0462b602c508b50df92cab6e667aff3519aa431e01e0a708a1593ba39ce445b4 successful\
Wallet 2 Cast Vote on Proposal 1: 0x309ff1a5f482614dc0407f9a0f6374f8522eec0e909abfc4d5541296d7f59047 successful\



output2:\
The balance of the 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 is 10000000000000000000000 WEI\
[ 'Chocolate', 'Vanilla', 'Strawberry' ]\
Deploying Ballot contract\
Proposals: \
Proposal N. 1: Chocolate\
Proposal N. 2: Vanilla\
Proposal N. 3: Strawberry\
The ballot contract was deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 at block 1\
The chairperson of this contract is 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\
Giving right to vote to address 0x70997970C51812dc3A010C7d01b50e0d17dc79C8\
The transaction hash is 0x940de70c27c06d42098a918c102fb1116d6a9d518313b8b81914cec8dba06a4c included at block 2\
Casting vote for proposal number: 1\
The transaction hash is 0x8bfba6cd7af07895ead99ddc9ed632148bd79044777ae0db809bba6acf0a722a included at block 3\
Delegating Vote to addresss: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8\
SolidityError: VM Exception while processing transaction: reverted with reason string 'You already voted.'\
    at Ballot.delegate (contracts/Ballot.sol:79)\
    at processTicksAndRejections (node:internal/process/task_queues:96:5)\
    at runNextTicks (node:internal/process/task_queues:65:3)\
    at listOnTimeout (node:internal/timers:528:9)\
    at processTimers (node:internal/timers:502:7)\
    at async HardhatNode._mineBlockWithPendingTxs (/Users/voaas/VOaaS/encode/lesson5/project/node_modules/hardhat/src/internal/hardhat-network/provider/node.ts:1840:23)\
    at async HardhatNode.mineBlock (/Users/voaas/VOaaS/encode/lesson5/project/node_modules/hardhat/src/internal/hardhat-network/provider/node.ts:517:16)\
    at async EthModule._sendTransactionAndReturnHash (/Users/voaas/VOaaS/encode/lesson5/project/node_modules/hardhat/src/internal/hardhat-network/provider/modules/eth.ts:1532:18) {\
  stackTrace: [\
    {\
      type: 4,\
      sourceReference: [Object],\
      message: [ReturnData],\
      isInvalidOpcodeError: false\
    }\
  ],\
  data: '0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012596f7520616c726561647920766f7465642e0000000000000000000000000000',\
  transactionHash: '0xa1d24d37d2547c6311f1d1d427aaef43a63b0c400d9b16e87982fb1249abd17a'\
}\


Transactions:

Give Right to Vote to Wallet 2: 0x940de70c27c06d42098a918c102fb1116d6a9d518313b8b81914cec8dba06a4c  successful\
Wallet 1 Cast Vote Proposal 1: 0x8bfba6cd7af07895ead99ddc9ed632148bd79044777ae0db809bba6acf0a722a  successful\
Wallet 1 delegate to Wallet 2:'0xa1d24d37d2547c6311f1d1d427aaef43a63b0c400d9b16e87982fb1249abd17a' reverted since wallet 1 already voted



