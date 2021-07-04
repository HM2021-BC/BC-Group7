pragma solidity ^0.5.0;

/**
 * @title Room creator to create DiceGame-Room smart contract
 * @author Enis Tola
 */

 contract RoomCreator {

    // list of rooms
    address[] public rooms;
    
    /**
    * @dev Create new room and set necessary values
    * @param stake the stake every player has to bet on each game turn (in ETH)
    * @param roomSize maximum amount of players allowed into one room
    */
    function createRoom(uint stake, uint roomSize) public {
        address newRoom = address (new DiceGame(
            stake,
            roomSize
        ));

        rooms.push(newRoom);
    }

    /**
    * @dev get all deployed Rooms
    */
    function getDeployedRooms() public view returns (address[] memory) {
        return rooms;
    }
}