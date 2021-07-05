pragma solidity ^0.5.0;

/**
 * @title Tamacoinchi smart contract, displaying how raising a virtual pet on the blockchain could look like
 * @author Enis Tola
 * @dev Tamacoinchi is a smart contract that allows users to raise their own virtual cute pet.
 * Every transaction is written on the Ethereum blockchain. Feed, pet and raise your pet.
 * But be careful: if you're pet starves to death, you have to ask a friend to revive it!
 */

contract Tamacoinchi {
    struct Pet {
        address manager;
        string managerName;
        string petName;
        string gender;
        uint256 level;
        uint256 life;
        uint256 affection;
    }

    // a mapping list of gamer addresses, to check if address is current participant in the game or not
    // - if PlayerInfo doesnt work -> mapping(address=>bool) public players;
    mapping(Pet => bool) public owners;

    // current number of players inside the room
    // when anyone joins a room, the number will increase, and decrease whenever they leave
    uint256 public numberOfPets;

    modifier ownerOnly() {
        require(players[msg.sender]);
        _;
    }

    modifier nonOwnerOnly() {
        require(players[msg.sender]);
        _;
    }

    /**
     * @dev init campaign
     * @param _stake the stake each player has to bet in each round, set for a room (in ETH)
     * @param _roomSize the maximum amount of players allowed into one game room
     */
    constructor(uint256 _stake, uint256 _roomSize) public {
        stake = _stake;
        roomSize = _roomSize;
    }

    function feed() public payable ownerOnly {}

    function pet() public payable {}

    function revive() public payable nonOwnerOnly {}
}
