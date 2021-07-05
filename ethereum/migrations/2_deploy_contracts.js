var RoomCreator = artifacts.require("./PetCreator");

module.exports = function (deployer) {
  deployer.deploy(PetCreator);
}; 
