import web3 from "./web3";
import PetCreator from "./build/contracts/PetCreator.json";

const petCreatorAddress = "0x876B307aD31ca65716fa8Af1B66e46f8348a6b40";

const instance = new web3.eth.Contract(PetCreator.abi, petCreatorAddress);

export default instance;
