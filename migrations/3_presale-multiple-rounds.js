const SimpleToken = artifacts.require("SimpleToken.sol");
const PresaleCrowdsale = artifacts.require("PresaleCrowdsale.sol");

module.exports = (deployer, network, [owner]) => deployer
// SimpleToken already deployed by the 2nd migration
// .then(() => deployer.deploy(SimpleToken, "Tooploox", "TPX", 18, 21000000))
  .then(() => deployer.deploy(PresaleCrowdsale, 10000, owner, SimpleToken.address, owner))
  .then(() => SimpleToken.deployed())
  .then(token => token.transfer(PresaleCrowdsale.address, '100000000000000000'));
