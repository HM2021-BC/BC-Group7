import web3 from "./web3";
import PetCreator from "./build/contracts/PetCreator.json";

const petCreatorAddress = "0xDe40229c54961378bD8e93527a984CeBe3a26Dfd";

const instance = new web3.eth.Contract(PetCreator.abi, petCreatorAddress);

export default instance;
