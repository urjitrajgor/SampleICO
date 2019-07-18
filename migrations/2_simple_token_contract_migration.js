const SimpleToken = artifacts.require("SimpleToken");
const GenericCrowdsale = artifacts.require("GenericCrowdsale");

module.exports =  async (deployer, network, [owner]) => {
  await deployer.deploy(SimpleToken, "Tech Token", "TEC", 18, 21000000);

  const now = Math.floor(Date.now() / 1000);

  const day = 24 * 60 * 60;

  const openingtime = now;

  const closingtime = openingtime + 2 * day;

  const rate = 1000;
  
  await deployer.deploy(GenericCrowdsale, openingtime, closingtime, rate, owner, SimpleToken.address);

  console.log("Transfering Token...");

  const token = await SimpleToken.deployed();

  await token.transfer(GenericCrowdsale.address, "20000000000000000000000000", {from: owner});
};