pragma solidity ^0.5.0;

/**
 * @title Pet creator to create Tamacoinchi smart contract
 * @author Enis Tola
 */

import "./Tamacoinchi.sol";

contract PetCreator {
    // list of rooms
    address[] public pets;

    /**
     * @dev Create new pet and set necessary values
     * @param _name name of the pet
     * @param _isMale gender of the pet
     * @param _lastTimeFed the last time the pet got fed. important to determine life levels after time!
     */
    function createPet(
        string memory _name,
        string memory ownerName,
        bool _isMale,
        uint256 _lastTimeFed
    ) public {
        address newPet =
            address(
                new Tamacoinchi(
                    msg.sender,
                    ownerName,
                    _name,
                    _isMale,
                    _lastTimeFed
                )
            );

        pets.push(newPet);
    }

    /**
     * @dev get all deployed Pets
     */
    function getDeployedPets() public view returns (address[] memory) {
        return pets;
    }
}
