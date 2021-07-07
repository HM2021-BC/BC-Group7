import web3 from "./web3";
import PetCreator from "./build/contracts/PetCreator.json";

const petCreatorAddress = "0xA0c18d61B9bf9DE3F36A0657F25b224B8ce6622b";

const instance = new web3.eth.Contract(PetCreator.abi, petCreatorAddress);

export default instance;
