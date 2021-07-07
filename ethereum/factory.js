import web3 from "./web3";
import PetCreator from "./build/contracts/PetCreator.json";

const petCreatorAddress = "0xD64dE91E2678936aFa2817f514b74fF1e56eA4AD";

const instance = new web3.eth.Contract(PetCreator.abi, petCreatorAddress);

export default instance;
