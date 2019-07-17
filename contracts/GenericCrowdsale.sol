pragma solidity 0.5.0;

import "./SimpleToken.sol";
import "../client/node_modules/openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";

contract GenericCrowdsale is TimedCrowdsale
{
    constructor(uint256 _openingTime, uint256 _closingTime, uint256 _rate, address payable _wallet, ERC20 _token)
    Crowdsale(_rate, _wallet, _token)
    TimedCrowdsale(_openingTime, _closingTime)
    public{}
}