var PracticeToken = artifacts.require("./PracticeToken.sol");
var PracticeTokenSale = artifacts.require("./PracticeTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(PracticeToken, 1000000).then(function() {
    // Token price is 10 Ether
    var tokenPrice = 10000000000000000000;
    return deployer.deploy(PracticeTokenSale, PracticeToken.address, tokenPrice);
  });
};
