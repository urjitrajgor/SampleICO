pragma solidity 0.5.0;

import "../client/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "../client/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract SimpleToken is ERC20Detailed, ERC20 {
    uint256 public totalSupply_;
    mapping(address => uint256) balances;

    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _amount)
    ERC20Detailed(_name, _symbol, _decimals)
    public {
        require(_amount > 0, "Amount has to be greater then 0");
        uint256 initialSupply = _amount.mul(10 ** uint256(_decimals));
        _mint(msg.sender, initialSupply);
        emit Transfer(address(0), msg.sender, initialSupply);
    }
}
