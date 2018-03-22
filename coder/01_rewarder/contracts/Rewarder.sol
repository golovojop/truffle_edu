<<<<<<< HEAD
pragma solidity ^0.4.4;

=======
pragma solidity ^0.4.19;
>>>>>>> init commit

contract Rewarder {
  address public mOwner;
  mapping(address => uint256) internal mBalances;

<<<<<<< HEAD
  function Rewarder() public {
    mOwner = msg.sender;
    mBalances[mOwner] = 1000;
  }

  function getBalance() public view returns (uint256 balance) {
    balance = mBalances[mOwner];
  }
  
  /*
   */

  function getBalanceEx(address _from) public view returns (uint256 balance) {
    balance = mBalances[_from];
  }

=======
  // Reward event
  event Reward(uint256 indexed _value, address indexed _to);

  function Rewarder(uint256 _emission) public {
    require(_emission > 0);
    mOwner = msg.sender;
    mBalances[msg.sender] = _emission;
  }

  function reward(uint256 _val, address _to) public returns (bool sufficient){
    sufficient = false;
    require((_val > 0) && (_to != 0));
    require(mBalances[mOwner] >= _val);
    mBalances[mOwner] -= _val;
    mBalances[_to] += _val;
    Reward(mBalances[_to], _to);
    sufficient = true;    
  }

  function getBalance(address _from) public view returns (uint256) {
    return mBalances[_from];
  }
>>>>>>> init commit
}
