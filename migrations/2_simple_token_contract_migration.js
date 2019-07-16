const SimpleToken = artifacts.require("./SimpleToken.sol");

module.exports = (deployer) => {
  deployer.deploy(SimpleToken, "Tooploox", "TPX", 18, '21000000');
};