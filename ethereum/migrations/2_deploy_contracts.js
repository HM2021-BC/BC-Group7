var PetCreator = artifacts.require("./PetCreator");

module.exports = function (deployer) {
  deployer.deploy(PetCreator);
};
