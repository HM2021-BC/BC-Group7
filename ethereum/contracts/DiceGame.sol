pragma solidity ^0.5.0;

/**
 * @title Dice gambling smart contract, demonstration of how a possible decentralized gambling/betting game experience could look like
 * @author Enis Tola
 * @dev DiceGame is a smart contract that allows users to participate in dice gambling without having to fear centralized 
 * authorities. Every transaction is written on the Ethereum blockchain, cutting out any kind of middle man
 */
 
contract DiceGame {
    struct PlayerInfo {
        address userAddress;
        string username;
    }

    // min stake value in ETH
    uint public stake;

    // maxmimum amount of players inside one room
    uint public roomSize;

    // a mapping list of gamer addresses, to check if address is current participant in the game or not
    // - if PlayerInfo doesnt work -> mapping(address=>bool) public players;
    mapping(PlayerInfo=>bool) public players;

    // current number of players inside the room
    // when anyone joins a room, the number will increase, and decrease whenever they leave
    uint public numberOfPlayers;

    modifier playerOnly() {
        require(players[msg.sender]);
        _;
    }

    /**
     * @dev init campaign 
     * @param _stake the stake each player has to bet in each round, set for a room (in ETH)
     * @param _roomSize the maximum amount of players allowed into one game room
     */
    constructor(uint _stake, uint _roomSize) public {  
        stake = _stake;
        roomSize = _roomSize;
    }

    /**
     * @dev player joins the game
     */ 
    function joinGame() {
        players[msg.sender] = true;
        numberOfPlayers++;
    }

    /**
     * @dev player leaves the game
     */ 
    function leaveGame() {
        players[msg.sender] = false;
        numberOfPlayers--;
    }

    function bet() public payable playerOnly {
        require(msg.value >= stake);
    }

    function determineWinner(uint[] playerInputs, uint finalResult) {
        // Logic to determine winner
    }

    function payMoneyToWinner(address winner) {
        // Get all the money from the pool and then transfer it to the winner
        winner.transfer(request.amount);
    }
 }