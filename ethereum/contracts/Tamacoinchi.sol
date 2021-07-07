pragma solidity ^0.5.0;

/**
 * @title Tamacoinchi smart contract, displaying how raising a virtual pet on the blockchain could look like
 * @author Enis Tola
 * @dev Tamacoinchi is a smart contract that allows users to raise their own cute virtual pet.
 * Every transaction is written on the Ethereum blockchain. Feed, pet and raise your new best friend.
 * But be careful: if you're pet starves to death, you have to ask a friend to revive it!
 *
 * Tamacoinchi earns money by offering paid feed() and revive() methods user can use to keep their pets
 * alive or revive them if they die! That's what creatorOfThisContract is used for
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

    // a mapping list of owner address, to check if owner already has a pet
    mapping(address => bool) public owners;

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
        owners[_owner] = true;
        owner = _owner;
        ownerName = _ownerName;
        name = _name;
        isMale = _isMale;
        lastTimeFed = _lastTimeFed;
    }

    function feed(uint256 currentTime) public payable ownerOnly {
        // 0.01 eth increases "life" by 10%
        require(msg.value >= 1000000000000000);
        // increasing lastTimeFed by amount payed
        // If user pays 0.12 ETH, pets life will increase to 100%
        if (msg.value >= 12000000000000000) {
            lastTimeFed = currentTime;
        } else {
            // else the amount will increase by 2h for every 0.01eth
            uint256 buffer = (msg.value / 1000000000000000) * 2 * 3600 * 1000;
            lastTimeFed = lastTimeFed + buffer;
        }

        // Pay the creator of the conract, which is us (that's how we earn money)
        creatorOfThisContract.transfer(msg.value);
    }

    function revive(uint256 currentTime) public payable nonOwnerOnly {
        // Check if pet is actually dead and if the fee for revival has been payed!
        // Reset lastTimeFed to currentTime
        require(currentTime > (lastTimeFed + (24 * 3600 * 1000)));
        require(msg.value >= 20000000000000000);
        lastTimeFed = currentTime;

        // Pay the creator of the conract, which is us (that's how we earn money)
        creatorOfThisContract.transfer(msg.value);
    }

    /**
     * @dev get summary information about pet
     */
    function getSummaryOfYourPet()
        public
        view
        returns (
            address,
            address,
            string memory,
            string memory,
            bool,
            uint256
        )
    {
        address myAddress = address(this);
        return (myAddress, owner, ownerName, name, isMale, lastTimeFed);
    }
}
