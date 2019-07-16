pragma solidity 0.5.0;

import "../client/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../client/node_modules/openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "../client/node_modules/openzeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol";
import "../client/node_modules/openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";

contract RoundCrowdsale is AllowanceCrowdsale, TimedCrowdsale {
    constructor( uint256 _rate, address payable _wallet, ERC20 _token, address _tokenWallet, uint256 _openingTime, uint256 _closingTime)
    Crowdsale(_rate, _wallet, _token)
    AllowanceCrowdsale(_tokenWallet)
    TimedCrowdsale(_openingTime, _closingTime)
    public
    {}
    
}