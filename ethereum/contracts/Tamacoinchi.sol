pragma solidity ^0.5.0;

/**
 * @title Tamacoinchi smart contract, displaying how raising a virtual pet on the blockchain could look like
 * @author Enis Tola
 * @dev Tamacoinchi is a smart contract that allows users to raise their own cute virtual pet.
 * Every transaction is written on the Ethereum blockchain. Feed, pet and raise your new best friend.
 * But be careful: if you're pet starves to death, you have to ask a friend to revive it!
 */

contract Tamacoinchi {
    // Creator of the Tamacoinchi
    address public owner;
    string ownerName;

    // Pets name, gender, lastTimeFed, affection
    string name;
    bool isMale;
    uint256 lastTimeFed;

    // a mapping list of pet owner addresses
    // Necessary to prevent owners from getting multiple pets after one dies
    mapping(address => bool) public owners;

    // current number of pets
    uint256 public numberOfPets;

    modifier ownerOnly() {
        require(owners[msg.sender]);
        _;
    }

    modifier nonOwnerOnly() {
        require(owners[msg.sender]);
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
        // Check whether the amount payed is more than you can feed your pet for a day
        // 0.5 eth fill "life" value to 100%
        uint256 food = msg.value * (48 * 3600 * 1000);

        // increasing lastTimeFed by amount payed
        if (food < (24 * 3600 * 1000)) {
            lastTimeFed = lastTimeFed + msg.value * (4.8 * 3600 * 1000);
        } else {
            lastTimeFed = currentTime;
        }
    }

    function revive(uint256 currentTime) public payable nonOwnerOnly {
        // Check if pet is actually dead and if the fee for revival has been payed!
        // Reset lastTimeFed to currentTime
        require(currentTime > lastTimeFed + (24 * 3600 * 1000));
        require(msg.value > 2500000000000000000);
        lastTimeFed = currentTime;
    }
}
