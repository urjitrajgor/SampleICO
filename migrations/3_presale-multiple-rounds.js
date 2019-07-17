const SimpleToken = artifacts.require("SimpleToken.sol");
const PresaleCrowdsale = artifacts.require("PresaleCrowdsale.sol");

module.exports = async (deployer, network, [owner]) => {
 
  await deployer.deploy(PresaleCrowdsale, 10000, owner, SimpleToken.address, owner);
  const token = await SimpleToken.deployed();
  console.log(token);
  await token.increaseAllowance(PresaleCrowdsale.address, '100000000000000000');
}