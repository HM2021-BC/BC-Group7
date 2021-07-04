var RoomCreator = artifacts.require("./RoomCreator");

module.exports = function(deployer) {
  deployer.deploy(RoomCreator);
}; 
