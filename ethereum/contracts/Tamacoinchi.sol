pragma solidity ^0.5.0;

/**
 * @title Tamacoinchi smart contract, displaying how raising a virtual pet on the blockchain could look like
 * @author Enis Tola
 * @dev Tamacoinchi is a smart contract that allows users to raise their own cute virtual pet.
 * Every transaction is written on the Ethereum blockchain. Feed, pet and raise your new best friend.
 * But be careful: if you're pet starves to death, you have to ask a friend to revive it!
 */

contract Tamacoinchi {
    // Recipient of all payable transactions -> creator of tamacoinchi
    // Swap address with an address from the truffle develop output before running tests
    address payable creatorOfThisContract =
        0x79906ec99Fe449dF7A06278F716e8a20408194DA;

    // Creator of the Tamacoinchi
    address public owner;
    string public ownerName;

    // Pets name, gender, lastTimeFed, affection
    string public name;
    bool public isMale;
    uint256 public lastTimeFed;

    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }
    modifier nonOwnerOnly() {
        require(msg.sender != owner);
        _;
    }

    constructor(
        address _owner,
        string memory _ownerName,
        string memory _name,
        bool _isMale,
        uint256 _lastTimeFed
    ) public {
        owner = _owner;
        ownerName = _ownerName;
        name = _name;
        isMale = _isMale;
        lastTimeFed = _lastTimeFed;
    }

    function feed(uint256 currentTime) public payable ownerOnly {
        // 0.01 eth increases "life" by 10%
        require(msg.value >= 10000000000000000);
        // increasing lastTimeFed by amount payed
        // If user pays 0.05 ETH, pets life will increase to 100%
        if (msg.value >= 50000000000000000) {
            lastTimeFed = currentTime;
        } else {
            // else the amount will increase by
            uint256 buffer = (msg.value / 10000000000000000) * 2 * 3600 * 1000;
            lastTimeFed = lastTimeFed + buffer;
        }

        creatorOfThisContract.transfer(msg.value);
    }

    function revive(uint256 currentTime) public payable nonOwnerOnly {
        // Check if pet is actually dead and if the fee for revival has been payed!
        // Reset lastTimeFed to currentTime
        require(currentTime > (lastTimeFed + (24 * 3600 * 1000)));
        require(msg.value >= 200000000000000000);
        lastTimeFed = currentTime;

        creatorOfThisContract.transfer(msg.value);
    }
}
