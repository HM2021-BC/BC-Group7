import web3 from "./web3";
import PetCreator from "./build/contracts/PetCreator.json";

const petCreatorAddress = "0x44b7fc6501780B91307e2B291591da4e7A375060";

const instance = new web3.eth.Contract(PetCreator.abi, petCreatorAddress);

export default instance;
