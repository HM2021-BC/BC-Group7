import web3 from "./web3";
import PetCreator from "./build/contracts/PetCreator.json";

const petCreatorAddress = "0xBf554B673216E178DF7718F514380510586b25a9";

const instance = new web3.eth.Contract(PetCreator.abi, petCreatorAddress);

export default instance;
