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
    address payable creatorOfThisContract =
        0xD0615397654C2C4834a85D879C0C91468bcE8f1b;

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
        // 0.1 eth increases "life" by 10%

        // increasing lastTimeFed by amount payed
        if (msg.value > 1000000000000000000) {
            lastTimeFed = currentTime;
        } else {
            lastTimeFed = lastTimeFed + msg.value * 24 * 3600 * (1000 / 10);
        }

        creatorOfThisContract.transfer(msg.value);
    }

    function revive(uint256 currentTime) public payable nonOwnerOnly {
        // Check if pet is actually dead and if the fee for revival has been payed!
        // Reset lastTimeFed to currentTime
        require(currentTime > (lastTimeFed + (24 * 3600 * 1000)));
        require(msg.value >= 2000000000000000000);
        lastTimeFed = currentTime;

        creatorOfThisContract.transfer(msg.value);
    }
}
