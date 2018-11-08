# PracticeCoin  
Its a basic ERC20 where you can use the basic functions like crowdfunding.  
It was made with solidity 0.4.9 but I migrated it to 0.4.24.  
   
# Tools  
Ganache https://truffleframework.com/ganache  
Metamask https://metamask.io/  

# Steps    
λ `npm install truffle@v4.1.14 -g`  
λ `truffle version`  
Truffle v4.1.14 (core: 4.1.14)  
Solidity v0.4.24 (solc-js)  
λ `git clone https://github.com/kennblvnp/PracticeCoin.git`  
λ `cd PracticeCoin`  
λ `truffle migrate --reset`  
  
# Truffle Console  
λ `PracticeToken.deployed().then(function(instance){ tokenInstance=instance; })`  
λ `tokenInstance.address`  
0x5313aeabd1ed00b7236b5a05a06ac5b6c417dbaa'   
λ `tokenInstance.totalSupply().then(function(totalSupply){ practiceTokensupply=totalSupply; })`  

Right now this supply is only for free. If you transfer, there is no fee.  
λ `practiceTokensupply`  
BigNumber { s: 1, e: 6, c: [ 1000000 ] }  

λ `PracticeTokenSale.deployed().then(function(instance){ saleInstance=instance; })`  
λ `saleInstance.address`
'0xcc75b1263e648148dd7d39fede9ba95e26049120'  

Transfer all practiceTokensupply to PracticeTokenSale  
λ `tokenInstance.transfer(saleInstance.address, practiceTokensupply, { from: web3.eth.accounts[0] })`  

Check the balance of PracticeToken, this should return 0  
λ `tokenInstance.balanceOf(tokenInstance.address)` 
BigNumber { s: 1, e: 0, c: [ 0 ] }  

Check supply of PracticeToken, it should return 1000000 by now  
λ `tokenInstance.balanceOf(saleInstance.address)` 
BigNumber { s: 1, e: 0, c: [ 1000000 ] }  

Doing this will deduct fees to the buyer  
10000000000000000000 is the token price = 10 ethereum  
λ `saleInstance.buyTokens(5, { from: web3.eth.accounts[0], value: 5 * 10000000000000000000 })`  
Try it with another user  
λ `saleInstance.buyTokens(5, { from: web3.eth.accounts[1], value: 5 * 10000000000000000000 })`  


# To check the balance of PracticeTokenSale  
λ `tokenInstance.balanceOf(saleInstance.address)`   


If you are ready to deploy your contract in main net you might wanna use this standard ERC (version November 2018):   https://github.com/OpenZeppelin/openzeppelin-solidity