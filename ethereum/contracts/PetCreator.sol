pragma solidity ^0.5.0;

/**
 * @title Pet creator to create Tamacoinchi smart contract
 * @author Enis Tola
 */

import "./Tamacoinchi.sol";

contract PetCreator {
    // list of pets
    address[] public pets;

    // a mapping list of owner address, to check if owner already has a pet
    mapping(address => bool) public owners;

    function checkIfSenderAlreadyHasAPet(address tobeCheckedOwner)
        public
        payable
    {
        require(!owners[tobeCheckedOwner]);
        owners[tobeCheckedOwner] = true;
    }

    /**
     * @dev Create new pet and set necessary values
     * @param _ownerName name of pets owner
     * @param _name name of the pet
     * @param _isMale gender of the pet
     * @param _lastTimeFed the last time the pet got fed. important to determine life levels after time!
     */
    function createPet(
        string memory _ownerName,
        string memory _name,
        bool _isMale,
        uint256 _lastTimeFed
    ) public {
        // Disable check before running tests
        checkIfSenderAlreadyHasAPet(msg.sender);
        address newPet =
            address(
                new Tamacoinchi(
                    msg.sender,
                    _ownerName,
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
