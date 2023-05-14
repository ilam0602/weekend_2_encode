Ran environment in hardhat goerli too expensive, sepolia giving problems


script1:

deploy token contract ; transaction hash: 0xd32296fab1cabfbabc47e0276e5d9e3bc13f78308e291ef14688557a47607c02
mint 10 tokens to acc1 ; transaction hash: 0x136213c681187ae505c45a90212fb5e565a38ac0580bd4200c699de63da9e849
mint 10 tokens to acc1 ; transaction hash: 0x71bf03a433e8cd1754f44a9957482e6ff6e5ea8a02dbc562079be41a7eb0ee85
acc1 self delegation ; transaction hash: 0xe0c08933184088087372bbdd3bced678e7b9d912fe57911d7be086e36133a548
acc2 self delegation ; transaction hash: 0xb872f2d5386afb0710a09a49e186a4d98e5728461eafd18d4611179662ed4c8c 

deploy ballot contract ; transaction hash: 0xfcd9a51b403a1aa2ffea802850c68ba23ec628ceda1e0522de860b0bf74a954d
acc1 vote 6 for strawberry ; transaction hash: 0x7a33abf525e01c90b3ebd0e98d48b6357f82ce642634cf59c0887e36227f9c8e 
acc2 vote 5 for chocolate ; transaction hash: 0x5a76405edacec721882716d4fc66407316567f68e4275bf163d7475186e59355 

script1 output:
```
token contract deployed at: 0xd32296fab1cabfbabc47e0276e5d9e3bc13f78308e291ef14688557a47607c02
Minted 10.0 tokens to the address
    0x70997970C51812dc3A010C7d01b50e0d17dc79C8 at block 2
            transaction hash: 0x136213c681187ae505c45a90212fb5e565a38ac0580bd4200c699de63da9e849
Minted 10.0 tokens to the address
    0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC at block 3
            transaction hash: 0x71bf03a433e8cd1754f44a9957482e6ff6e5ea8a02dbc562079be41a7eb0ee85
Account 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 has 10.0 of MyToken
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 10.0 of MyToken
Account 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 self delegated
            transaction hash: 0xe0c08933184088087372bbdd3bced678e7b9d912fe57911d7be086e36133a548
Account 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 has 10.0 of voting power after self delegate
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC self delegated
            transaction hash: 0xb872f2d5386afb0710a09a49e186a4d98e5728461eafd18d4611179662ed4c8c
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 10.0 of voting power after self delegate
The ballot contract was deployed at address 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 at the block 6
            transaction hash: 0xfcd9a51b403a1aa2ffea802850c68ba23ec628ceda1e0522de860b0bf74a954d
Account 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 has 10.0 of voting power before voting
Account 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 has 4.0 of voting power after voting 
            transaction hash: 0x7a33abf525e01c90b3ebd0e98d48b6357f82ce642634cf59c0887e36227f9c8e
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 10.0 of voting power before voting
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 5.0 of voting power after voting 
            transaction hash: 0x5a76405edacec721882716d4fc66407316567f68e4275bf163d7475186e59355
winner: strawberry
```
all transactions successful

script2: 


deploy token contract ; transaction hash: 0xd32296fab1cabfbabc47e0276e5d9e3bc13f78308e291ef14688557a47607c02
mint 10 tokens to acc1 ; transaction hash: 0x136213c681187ae505c45a90212fb5e565a38ac0580bd4200c699de63da9e849
mint 10 tokens to acc1 ; transaction hash: 0x71bf03a433e8cd1754f44a9957482e6ff6e5ea8a02dbc562079be41a7eb0ee85
acc1 self delegation ; transaction hash: 0xe0c08933184088087372bbdd3bced678e7b9d912fe57911d7be086e36133a548
acc2 self delegation ; transaction hash: 0xb872f2d5386afb0710a09a49e186a4d98e5728461eafd18d4611179662ed4c8c 

deploy ballot contract ; transaction hash: 0xfcd9a51b403a1aa2ffea802850c68ba23ec628ceda1e0522de860b0bf74a954d

acc2 vote 5 for chocolate; transaction hash: 0xc74f94e46821ce9a7739887adaa551d7a6914ce7404ac09523dcc595553c27e6
acc2 vote 5 for strawberry; transaction hash: 0xb78c1f167a832f10cd6fcc6444da3d1996a2b239eb70256a778c15508c41f107
acc2 vote 5 for vanilla; transaction failed because no more votes for acc2, they were all used


script2 output:
```
voaas@MacBook-Pro-2019 project % yarn hardhat run ./scripts/TokenizedBallot.ts
token contract deployed at: 0xd32296fab1cabfbabc47e0276e5d9e3bc13f78308e291ef14688557a47607c02
Minted 10.0 tokens to the address
    0x70997970C51812dc3A010C7d01b50e0d17dc79C8 at block 2
            transaction hash: 0x136213c681187ae505c45a90212fb5e565a38ac0580bd4200c699de63da9e849
Minted 10.0 tokens to the address
    0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC at block 3
            transaction hash: 0x71bf03a433e8cd1754f44a9957482e6ff6e5ea8a02dbc562079be41a7eb0ee85
Account 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 has 10.0 of MyToken
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 10.0 of MyToken
Account 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 self delegated
            transaction hash: 0xe0c08933184088087372bbdd3bced678e7b9d912fe57911d7be086e36133a548
Account 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 has 10.0 of voting power after self delegate
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC self delegated
            transaction hash: 0xb872f2d5386afb0710a09a49e186a4d98e5728461eafd18d4611179662ed4c8c
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 10.0 of voting power after self delegate
The ballot contract was deployed at address 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 at the block 6
            transaction hash: 0xfcd9a51b403a1aa2ffea802850c68ba23ec628ceda1e0522de860b0bf74a954d
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 10.0 of voting power before voting
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 5.0 of voting power after voting 
            transaction hash: 0xc74f94e46821ce9a7739887adaa551d7a6914ce7404ac09523dcc595553c27e6
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 5.0 of voting power before voting
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 0.0 of voting power after voting 
            transaction hash: 0xb78c1f167a832f10cd6fcc6444da3d1996a2b239eb70256a778c15508c41f107
Account 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC has 0.0 of voting power before voting
/Volumes/WD_BLACK/encode/project/node_modules/@ethersproject/logger/src.ts/index.ts:269
        const error: any = new Error(message);
                           ^
Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="VM Exception while processing transaction: reverted with reason string 'not enough votes'", method="estimateGas", transaction={"from":"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC","to":"0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9","data":"0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000004563918244f40000","accessList":null}, error={"stackTrace":[{"type":4,"sourceReference":{"function":"vote","contract":"TokenizedBallot","sourceName":"contracts/TokenizedBallot.sol","sourceContent":"// SPDX-License-Identifier: GPL-3.0\npragma solidity >=0.7.0 <0.9.0;\n\ninterface IMyVotingToken{\n    function getPastVotes(address,uint256) external view returns(uint256);\n    function grantRole(address) external;\n}\n\n/// @title Voting with delegation.\ncontract TokenizedBallot {\n    // This is a type for a single proposal.\n    struct Proposal {\n        bytes32 name;   // short name (up to 32 bytes)\n        uint voteCount; // number of accumulated votes\n    }\n\n    // A dynamically-sized array of `Proposal` structs.\n    Proposal[] public proposals;\n\n    IMyVotingToken public tokenContract;\n    uint256 public targetBlockNumber;\n\n    mapping(address => uint256 ) public votingPowerSpent;\n\n    /// Create a new ballot to choose one of `proposalNames`.\n    constructor(bytes32[] memory proposalNames, address _tokenContract, uint256 _targetBlockNumber) {\n        // For each of the provided proposal names,\n        // create a new proposal object and add it\n        // to the end of the array.\n\n        // TODO INITIALIZE VOTING POWER\n        tokenContract = IMyVotingToken(_tokenContract);\n        targetBlockNumber = _targetBlockNumber;\n        tokenContract.grantRole(address(this));\n\n        for (uint i = 0; i < proposalNames.length; i++) {\n            // `Proposal({...})` creates a temporary\n            // Proposal object and `proposals.push(...)`\n            // appends it to the end of `proposals`.\n            proposals.push(Proposal({\n                name: proposalNames[i],\n                voteCount: 0\n            }));\n        }\n    }\n\n\n\n\n\n    /// Give your vote (including votes delegated to you)\n    /// to proposal `proposals[proposal].name`.\n    function vote(uint proposal,uint256 amount) external {\n\n        //TODO: Compute voting power\n        uint numVotes = votingPower(msg.sender); \n\n        //TODO: Update the voting power in that ballot\n        require(numVotes >= amount,\"not enough votes\");\n        votingPowerSpent[msg.sender] += amount;\n        proposals[proposal].voteCount += amount;\n\n    }\n\n    function votingPower(address account) public view returns (uint256 numVotes){\n        numVotes = tokenContract.getPastVotes(account,targetBlockNumber) - votingPowerSpent[account];\n    }\n\n    /// @dev Computes the winning proposal taking all\n    /// previous votes into account.\n    function winningProposal() public view\n            returns (uint winningProposal_)\n    {\n        uint winningVoteCount = 0;\n        for (uint p = 0; p < proposals.length; p++) {\n            if (proposals[p].voteCount > winningVoteCount) {\n                winningVoteCount = proposals[p].voteCount;\n                winningProposal_ = p;\n            }\n        }\n    }\n\n    // Calls winningProposal() function to get the index\n    // of the winner contained in the proposals array and then\n    // returns the name of the winner\n    function winnerName() external view\n            returns (bytes32 winnerName_)\n    {\n        winnerName_ = proposals[winningProposal()].name;\n    }\n}","line":59,"range":[1870,1916]},"message":{"value":{"type":"Buffer","data":[8,195,121,160,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,110,111,116,32,101,110,111,117,103,104,32,118,111,116,101,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"_selector":"08c379a0"},"isInvalidOpcodeError":false}],"data":"0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000106e6f7420656e6f75676820766f74657300000000000000000000000000000000"}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
    at Logger.makeError (/Volumes/WD_BLACK/encode/project/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Volumes/WD_BLACK/encode/project/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at checkError (/Volumes/WD_BLACK/encode/project/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:78:20)
    at EthersProviderWrapper.<anonymous> (/Volumes/WD_BLACK/encode/project/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
    at step (/Volumes/WD_BLACK/encode/project/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/Volumes/WD_BLACK/encode/project/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/Volumes/WD_BLACK/encode/project/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at runNextTicks (node:internal/process/task_queues:65:3)
    at listOnTimeout (node:internal/timers:528:9) {
  reason: "VM Exception while processing transaction: reverted with reason string 'not enough votes'",
  code: 'UNPREDICTABLE_GAS_LIMIT',
  method: 'estimateGas',
  transaction: {
    from: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
    to: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    data: '0xb384abef00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000004563918244f40000',
    accessList: null
  },
  error: SolidityError: VM Exception while processing transaction: reverted with reason string 'not enough votes'
      at TokenizedBallot.vote (contracts/TokenizedBallot.sol:59)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
      at runNextTicks (node:internal/process/task_queues:65:3)
      at listOnTimeout (node:internal/timers:528:9)
      at processTimers (node:internal/timers:502:7)
      at async EthModule._estimateGasAction (/Volumes/WD_BLACK/encode/project/node_modules/hardhat/src/internal/hardhat-network/provider/modules/eth.ts:431:7)
      at async HardhatNetworkProvider.request (/Volumes/WD_BLACK/encode/project/node_modules/hardhat/src/internal/hardhat-network/provider/provider.ts:123:18)
      at async EthersProviderWrapper.send (/Volumes/WD_BLACK/encode/project/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20) {
    stackTrace: [ [Object] ],
    data: '0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000106e6f7420656e6f75676820766f74657300000000000000000000000000000000'
  }
}
```

